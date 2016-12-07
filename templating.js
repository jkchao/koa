'use strict';
let nunjucks = require('nunjucks');

function createEnv(path, opts) {
    let
        autoescape = opts.autoescape && true,
        throwOnundefined = opts.throwOnundefined || false,
        watch = opts.watch || false,
        noCache = opts.noCache || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnundefined
            });
    if (opts.filters) {
        for (let f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env
}


function templating(path, opts) {
    //创建env对象
    let env = createEnv(path, opts);

    return async(ctx, next) => {
        //给ctx绑定render函数;
        ctx.render = function(view, model) {
            //把render后的内容给ctx.response.body
            ctx.response.body = env.render(view, Object.assign({}, ctx.staet || {}, model || {}));

            //设置content-type
            ctx.response.type = 'text/html';
        };
        //继续处理请求
        await next();
    }
}

module.exports = templating;