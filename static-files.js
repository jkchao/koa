// 'use strict';
// let
//     fs = require('mz/fs'),
//     path = require('path'),
//     mime = require('mime');

// //url 类似与'/static/'
// //dir 类似与__dirname+'/static/'
// function staticFiles(url, dir) {
//     return async(ctx, next) => {
//         let rpath = ctx.request.path;
//         console.log(rpath);
//         //判断是否以指定的URL开头
//         if (rpath.startsWith(url)) {
//             //获取完整地址
//             let fp = path.join(dir + rpath.substring(url.length));
//             //判断文件是否存在
//             if (await fs.exists(fp)) {
//                 //查找文件的mime
//                 ctx.response.type = mime.lookup(rpath);
//                 ctx.response.body = await fs.readFile(fp);
//             } else {
//                 //文件不存在
//                 ctx.response.status = 404;
//             }
//         } else {
//             //不是指定前缀的URL 继续处理下一个middleaware
//             await next();
//         }
//     };
// }

// //输出接口
// module.exports = staticFiles;

//解析静态文件
'use strice';