const Koa = require('koa')
const route = require('koa-route')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')
app = new Koa()

const port = process.env.PORT || '3000'

const index = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(path.resolve(__dirname, 'index.html'))
}

const statusList = ctx => {
    ctx.response.type = 'json'
    ctx.response.body = {
        result: [
            {id: 1, value: '1'},
            {id: 2, value: '2'},
            {id: 3, value: '3'}
        ]
    }
}

const assets = static(path.join(__dirname))

app.use(assets)
app.use(route.get('/', index))
app.use(route.get('/status/list', statusList))
app.listen(port)
