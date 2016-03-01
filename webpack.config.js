var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'js'),
    devtool: 'source-map',
    babel: {
        sourceMaps: true
    },
    entry: {
        'main': ['./setup.js']
    },
    output: {
        path: path.join(__dirname, 'build', 'webpack', 'modules'),
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                include: /(?:node_modules)/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
    ]
};