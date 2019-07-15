/**
 * 开发环境
 * 主要用于本地开发【server】、调试【sourcemap|各种loader转换】
 */

 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const baseConfig = require('./webpack.common.js');

 module.exports = merge(baseConfig, {
    mode : 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: "./",
        port: 9000,
        hot: true,
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
 });