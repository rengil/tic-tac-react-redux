'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/main.js')
    ],
    devServer: {
      pubic: " bulbasaur-S451LA", // Your Computer Name
      port: 8080
    },


    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },

            {
                test: /\.(less)?$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(scss)?$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },

            {
                test: /\.(css)?$/,
                loader: 'style!css'
            },

            {
                test: /\.(ttf|woff|eot|woff2)?$/,
                loader: 'file-loader'
            }
        ]
    }
};
