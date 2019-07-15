/**
 * 线上环境
 * 主要用于本地js打包构建，样式抽取，页面生成、压缩等
 */

 const merge = require('webpack-merge');
 const baseConfig = require('./webpack.common.js');


 module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        
    ]
 });