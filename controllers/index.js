'use strict';

module.exports = {
    'GET /': async(ctx, next) => {
        ctx.render('index.html', {
            title: 'Index'
        })
    },
    'GET /about': async(ctx, next) => {
        ctx.render('about.html'), {
            title: 'About'
        }
    },
    'GET /around': async(ctx, next) => {
        ctx.render('around.html'), {
            title: 'Around'
        }
    },
    'GET /tourist': async(ctx, next) => {
        ctx.render('tourist.html'), {
            title: 'Tourist'
        }
    },
    'GET /travel': async(ctx, next) => {
        ctx.render('travel.html'), {
            title: 'Travel'
        }
    },
}