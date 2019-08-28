/**
 * 线上环境
 * 主要用于本地js打包构建，样式抽取，页面生成、压缩等
 */

 const merge = require('webpack-merge');
 const baseConfig = require('./webpack.common.js');
 const autoprefixer = require('autoprefixer');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');


 module.exports = merge(baseConfig, {
    mode: 'production',
    module: {
      rules: [{
         test: /\.less$/,
         use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 2,
                  }
              },
              'postcss-loader',
              'less-loader'
         ],
      }]
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],

    optimization: {
      // minimizer: [
         //  new OptimizeCSSAssetsPlugin({}),
      // ],
   }
 });