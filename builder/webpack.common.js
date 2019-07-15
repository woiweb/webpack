/**
 * 通用部分
 * 主要包含开发环境及线上环境中的通用部分，如各种loader的处理
 */
const webpack = require('webpack');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const userConfig = require('../conf.js');
const pwd = process.cwd();

let entryMap = {}, htmls = [];
userConfig.pages.forEach((page) => {
    let entry = path.dirname(page.entry);
    entryMap[entry] = path.resolve('./', page.entry);

    htmls.push(new HtmlWebpackPlugin({
        template: path.resolve(pwd, './src/template.ejs'),
        filename: `${entry}/${page.filename}`,
        templateParameters: {
            title: page.title,
        },
        inject: true,
        chunks: ['vendor','common', entry]
    }))
});


let baseConfig = {
    entry: entryMap,
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.png|jpg|gif$/,
                use : ['file-loader']
            },
            {
                test: /\.less|.css$/,
                exclude : '/node_modules',
                use : ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        ...htmls
    ]
 };


 module.exports = baseConfig;