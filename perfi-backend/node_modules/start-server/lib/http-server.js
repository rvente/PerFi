'use strict';

var fs = require('fs'),
    union = require('union'),
    ecstatic = require('ecstatic'),
    httpProxy = require('http-proxy'),
    path = require('path'),
    url = require('url'),
    corser = require('corser');

//
// Remark: backwards compatibility for previous
// case convention of HTTP
//
exports.HttpServer = exports.HTTPServer = HttpServer;

/**
 * Returns a new instance of HttpServer with the
 * specified `options`.
 */
exports.createServer = function (options) {
  return new HttpServer(options);
};

/**
 * Constructor function for the HttpServer object
 * which is responsible for serving static files along
 * with other HTTP-related features.
 */
function HttpServer(options) {
  options = options || {};

  if (options.root) {
    this.root = options.root;
  }
  else {
    try {
      fs.lstatSync('./mocks/');
      this.root = './mocks/';
    }
    catch (err) {
      this.root = './';
    }
  }
  
  if(!options.config){
      options.config = path.join(this.root,'config.js');
  }
  try{
    this.config = require(options.config)
  }catch(err){
    this.config = {
        routes:{
            '404':{
                'data':'none'
            }
        }
    }
  }
//   console.log('config',options.config,this.config);
  this.routes = this.config.routes || {};
  this.headers = options.headers || {};

  this.cache = options.cache === undefined ? 3600 : options.cache; // in seconds.
  this.showDir =!(options.showDir !== 'false');
  this.autoIndex = options.autoIndex !== 'false';
  this.gzip = options.gzip === true;
  this.contentType = options.contentType || 'application/octet-stream';
  if (options.ext) {
    this.ext = options.ext === true
      ? 'json'
      : options.ext;
  }else{
      this.ext = 'json';

  }
  var before = options.before ? options.before.slice() : [];

  before.push(function (req, res) {
    if (options.logFn) {
      options.logFn(req, res);
    }

    res.emit('next');
  });

  if (options.cors) {
    this.headers['Access-Control-Allow-Origin'] = '*';
    this.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Range';
    if (options.corsHeaders) {
      options.corsHeaders.split(/\s*,\s*/)
          .forEach(function (h) { this.headers['Access-Control-Allow-Headers'] += ', ' + h; }, this);
    }
    before.push(corser.create(options.corsHeaders ? {
      requestHeaders: this.headers['Access-Control-Allow-Headers'].split(/\s*,\s*/)
    } : null));
  }
  this.pathQueryKeys = [];
  if(options.pathQueryKeys){
    this.pathQueryKeys = options.pathQueryKeys
  }else{
      if(this.config.pathQueryKeys){
        this.pathQueryKeys = this.config.pathQueryKeys;
      }else{
          if(this.config.pathQueryKeys===false){

          }else{
            this.pathQueryKeys = ['d','c','m'];//默认CI框架的风格
          }
      }
  }
    before.push((req,res)=>{
        let urlObj = url.parse(req.url)
        req.urlObj = urlObj;
        //把query组装一个新的path
        let paths = [urlObj.pathname];
        this.pathQueryKeys.forEach((item)=>{
            if(req.query[item]){
                paths.push(req.query[item])
            }
        })
        req.url = path.join.apply(null,paths);
        req.method = "GET";//把所有的方法当做GET来处理
      res.emit('next');
  })
//优先处理config里定义的路由
  if(this.routes.all){
    //   console.log('all',this.routes.all)
    //如果有路由
    before.push((req,res)=>{
        if(this.routes.all[req.url]){
            res.setHeader("Content-Type",'application/json');
            return res.end(JSON.stringify(this.routes.all[req.url]))
        }
        res.emit('next');
    })
  }
  if (options.robots) {
    before.push(function (req, res) {
      if (req.url === '/robots.txt') {
        res.setHeader('Content-Type', 'text/plain');
        var robots = options.robots === true
          ? 'User-agent: *\nDisallow: /'
          : options.robots.replace(/\\n/, '\n');

        return res.end(robots);
      }

      res.emit('next');
    });
  }

  before.push((req,res)=>{
      //路由提前处理
      if(!req.url.endsWith("."+this.ext)){
          if(req.url.endsWith("/")){
            req.url = req.url.substring(0,req.url.length-1)
          }
          req.url = req.url+"."+this.ext;
      }
      res.emit('next');
  })

  before.push(ecstatic({
    root: this.root,
    cache: this.cache,
    showDir: this.showDir,
    autoIndex: this.autoIndex,
    defaultExt: this.ext,
    gzip: this.gzip,
    contentType: this.contentType,
    handleError: typeof options.proxy !== 'string'
  }));

  if (typeof options.proxy === 'string') {
    var proxy = httpProxy.createProxyServer({});
    before.push(function (req, res) {
      proxy.web(req, res, {
        target: options.proxy,
        changeOrigin: true
      });
    });
  }

  var serverOptions = {
    before: before,
    headers: this.headers,
    onError: function (err, req, res) {
      if (options.logFn) {
        options.logFn(req, res, err);
      }

      res.end();
    }
  };

  if (options.https) {
    serverOptions.https = options.https;
  }
  this.server = union.createServer(serverOptions);
}

HttpServer.prototype.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

HttpServer.prototype.close = function () {
  return this.server.close();
};
