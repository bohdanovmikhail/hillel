var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('build'),
        filename: 'script.js',
        sourceMapFilename: 'script.js.map',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve('src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader', // 'babel-loader?presets=%40babel%2Fpreset-env'
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
