var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var request = require('request');

var app = new (require('express'))()
var port = 8000
var factURL = 'https://catfacts-api.appspot.com/api/facts?number=1'
var factProxy = '/catfacts'

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get(factProxy, function(req,res) {
    request(factURL, function (error, response, body) {
        res.write(body)
        res.end()
    })
});

app.listen(process.env.PORT || port, function(error) {
  if (error) {
    console.error(error)
  }
})
