const Koa = require('koa')
const route = require('koa-route')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')
app = new Koa()

const index = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, 'index.html'))
}

const assets = static(path.join(__dirname))

app.use(assets)
app.use(route.get('/', index))
app.listen(3000)
