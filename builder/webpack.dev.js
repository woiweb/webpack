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
        // contentBase: path.join(__dirname, "./build"),   //告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        port: 8000,
        hot: true,
        open: true,
        // openPage: './pages/home/index.html',
        overlay: true,
        historyApiFallback: {
            rewrites: [
              { from: /./, to: '/pages/404.html' }
            ]
        },
        after(app){
            console.log('启动完成', app);
            
        },
        proxy: {
            "/api": {
                target: 'https://m.weibo.cn/api/config/list',
                pathRewrite: {'^/api' : ''},
                changeOrigin: true
            }
        }
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
 });