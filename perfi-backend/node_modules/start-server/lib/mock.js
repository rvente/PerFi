var axios = require('axios');
var url = require('url');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

function createFile(_path, content) {
    if (/\.json/.test(_path)) {} else {
        _path = _path + '.json';
    }
    return new Promise((resolve, reject) => {
        mkdirp(path.dirname(_path), function (err) {
            if (err) {
                return reject(err);
            }
            fs.writeFile(_path, content, function (err) {
                if (err) {
                    return reject(err);
                } else {
                    console.log('file create success,path:', (_path))
                    return resolve()
                }
            })
        })

    })
}

module.exports = function (_url, options) {
    options = Object.assign({}, options);
    let urlObj = url.parse(_url,true);
    let opts = {
        url: _url,
    }
    if (options.proxy) {
        let proxyObj = url.parse(options.proxy);
        opts.proxy = {};
        opts.proxy.host = proxyObj.hostname;
        opts.proxy.port = proxyObj.port || 80;
    }
    let userPath = options.path || './mocks';
       let pathQueryKeys = [];
        if (options.pathQueryKeys) {
            pathQueryKeys = options.pathQueryKeys
        } else {

            if (options.pathQueryKeys === false) {

            } else {
                pathQueryKeys = ['d', 'c', 'm']; //默认CI框架的风格
            }
        }
            let paths = [urlObj.pathname];
            pathQueryKeys.forEach((item) => {
                    if(urlObj.query[item]){
                      paths.push(urlObj.query[item])
                    }
            })
            let pathFinal = path.join.apply(null, paths);
    return axios(opts).then((data) => {

        return createFile(path.join(userPath,pathFinal), JSON.stringify(data.data, null, 2)).then(() => {}).catch(e => {
            console.error('e', e);
        })
    }).catch(e => {
        return createFile(path.join(userPath, pathFinal), JSON.stringify({})).catch(e => {
            console.error('e', e);
        })
    })
}