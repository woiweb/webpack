/**
 * 开发环境
 * 主要用于本地开发【server】、调试【sourcemap|各种loader转换】
 */

 const pwd = process.cwd();
 const path = require('path');
 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const baseConfig = require('./webpack.common.js');

 module.exports = merge(baseConfig, {
    stats: { children: false },
    mode : 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        port: 8000,
        hot: true,
        open: true
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
 });