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