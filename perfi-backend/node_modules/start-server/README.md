
# start-server: 一个好用的本地文件mock工具

`start-server` 是一个简单好用的本地http服务器,可以方便的提供一个基于本地文件的mock服务，同时支持类似CI框架的dcm的query来作为路由mock本地文件,在`http-server`基础上改写而来。

## 介绍

start-server提供了这样一个本地文件和路由的映射关系，默认使用根目录下的mocks文件夹作为mock文件的存放目录，假如本地文件夹的层级如下:

    └── mocks
        └── api
            ├── posts
            │   ├── 1
            │   │   └── comments.json
            │   └── 1.json
            └── posts.json

那么在当前文件夹下使用```ss```命令启动服务后，你可以用下面的地址来请求本地mock的接口(默认端口9966)：

<http://127.0.0.1:9966/api/posts>

<http://127.0.0.1:9966/api/posts/1>

<http://127.0.0.1:9966/api/posts/1/comments>

另外，工具还提供了一个直接把线上的接口内容，使用一个简单的命令下载到当前目录的mocks文件夹内,比如上述示例的mock文件，其实是运行下面的命令来生成的，当然你也可以自己手动去创建

    ss mock https://jsonplaceholder.typicode.com/posts
    ss mock https://jsonplaceholder.typicode.com/posts/1
    ss mock https://jsonplaceholder.typicode.com/posts/1/comments

同时也支持CI框架的query参数dcm形式的路由,比如上述3个路由可以对应下面的dcm形式:


<http://127.0.0.1:9966/api/?d=posts>

<http://127.0.0.1:9966/api/?d=posts&c=1>

<http://127.0.0.1:9966/api/?d=posts&c=1&m=comments>

## 安装:

通过 `npm`:

    npm install start-server -g

## 使用

- 启动服务器：

    ```ss```

- 根据现有的url创建一个静态文件(如果请求成功则使用远程接口的内容，请求失败则只创建一个文件):

    ```ss mock [url]```
    examples:

    `start-server mock https://jsonplaceholder.typicode.com/posts`

## 配置文件格式

除了静态文件路由之外，还支持用配置文件来做一些复杂的路由映射,优先取配置文件里的配置,配置文件的地址默认为`/mocks/config.js`,主要用来配置一些简单的mock路径对应的响应,examples:

```
module.exports = {
    //路由配置
    'routes': {
        //方法,all代表全部方法
        'all': {
            //路径:响应的内容
            '/api/path1/path2': {
                'data':{
                    list:[
                        '1','2'
                    ]
                }
            },
            //如果是CI框架类型的话这里需要把dcm直接按照路径写,访问的时候使用/node?d=dd&c=cc&m=mm或者/node/dd/cc/mm都可以访问
            '/node/dd/cc/mm':{
                'data':{
                    list:[
                        '3','4'
                    ]
                }
            }
        }
    }

}
```

## 其它的命令行参数 Options:

`--config` 指定配置文件地址(可选),默认`[path]/config.js` 

`-p` Port to use (defaults to 8080)

`-a` Address to use (defaults to 0.0.0.0)

`-d` Show directory listings (defaults to 'True')

`-i` Display autoIndex (defaults to 'True')

`-g` or `--gzip` When enabled (defaults to 'False') it will serve `./public/some-file.js.gz` in place of `./public/some-file.js` when a gzipped version of the file exists and the request accepts gzip encoding.

`-e` or `--ext` Default file extension if none supplied (defaults to 'html')

`-s` or `--silent` Suppress log messages from output

`--cors` Enable CORS via the `Access-Control-Allow-Origin` header

`-o` Open browser window after starting the server

`-c` Set cache time (in seconds) for cache-control max-age header, e.g. -c10 for 10 seconds (defaults to '3600'). To disable caching, use -c-1.

`-U` or `--utc` Use UTC time format in log messages.

`-P` or `--proxy` Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com

`-S` or `--ssl` Enable https.

`-C` or `--cert` Path to ssl cert file (default: cert.pem).

`-K` or `--key` Path to ssl key file (default: key.pem).

`-r` or `--robots` Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')

`-h` or `--help` Print this list and exit.

`--pathQueryKeys` 如果需要类CI的路由风格，可以在这里指定，默认是`d,c,m`,设置为false则关闭query风格的路由模式  
