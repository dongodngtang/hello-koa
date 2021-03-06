const Koa = require('koa')
const bodyparser = require('koa-bodyparser');
const controller = require('./controller')


const app = new Koa();
app.use(bodyparser());
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} and URL: ${ctx.request.url}`)
    await next();
})



app.use(controller());


app.listen(3000);
console.log('app started at port 3000...');
