'use strict';

let
    Koa = require('koa'),
    controller = require('./controller'),
    bodyParser = require('koa-bodyparser'),
    templating = require('./templating'),
    isProduction = process.env.NODE_ENV === 'production',
    //创建WEB APP模块本身
    app = new Koa();


//对于每个请求使用异步函数
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

//处理静态文件
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static/'))
};


//request body
app.use(bodyParser());

//给ctx加上ctx.render方法
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

//add middleware
app.use(controller());



//监听3000端口
app.listen(3000);
console.log('app start in 3000');