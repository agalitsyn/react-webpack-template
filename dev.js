/*eslint no-console: 2*/
require('babel-core/register')

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var path = require('path')

var app = require('./modules/server')
var appPort = 1337
var proxy = 'http://localhost:' + appPort
app.listen(1337)

var devServer = new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, '.public'),
    publicPath: '/public/',
    historyApiFallback: true,
    proxy: [
        {
            path: /^(?!\/public).*$/,
            target: proxy
        }
    ]
})

devServer.listen(3000, 'localhost', function () {
    console.log('Listening at http://%s:%s', 'localhost', 3000)
})
