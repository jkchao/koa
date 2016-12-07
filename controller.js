'use strict';
let fs = require('fs');

function addcontroller(router, controller_dir) {
    fs.readdirSync(__dirname + '/controllers').filter((items) => {
        return items.endsWith('.js')
    }).forEach((f) => {
        //导入JS模块
        let mapping = require(__dirname + '/controllers/' + f);
        console.log(mapping);
        addMapping(router, mapping);
    });
}

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
        } else {
            console.log('NOT FIND');
        }
    }
}



//接口
module.exports = (dir) => {
    let
        controller_dir = dir || 'controllers',
        router = require('koa-router')();
    addcontroller(router, controller_dir);
    return router.routes();
};