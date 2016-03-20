var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var ip = '0.0.0.0'
var port = 8000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, ip, 511, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Listening on port %s. Open up %s:%s/ in your browser.", port, ip, port)
  }
})
