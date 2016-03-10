var path = require('path')

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        bundle: path.join(__dirname, 'modules', 'client')
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '.public'),
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'modules/client']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
}
