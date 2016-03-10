var path = require('path')

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'modules', 'client')
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
}
