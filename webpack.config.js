var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    devServer: {
        inline: true,
        port: 3333
    },
    entry: './src/main.jsx',
    output: { path: './dist/', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
