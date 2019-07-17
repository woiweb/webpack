/**
 * 通用部分
 * 主要包含开发环境及线上环境中的通用部分，如各种loader的处理
 */
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const userConfig = require('../conf.js');
const pwd = process.cwd();

let entryMap = {}, htmls = [];
userConfig.pages.forEach((page) => {
    let dir = path.dirname(page.src).replace('src/', '');
    console.log(dir);
    
    entryMap[page.entry] = path.resolve('./', page.src);

    htmls.push(new HtmlWebpackPlugin({
        template: path.resolve(pwd, './src/template.ejs'),
        filename: `${dir}/${page.filename}`,
        title: page.title,
        inject: true,
        chunks: ['vendor','common', page.entry],
    }))
});

htmls.push(new HtmlWebpackPlugin({
    template: path.resolve(pwd, './src/list.ejs'),
    filename: `index.html`,
    title: 'list',
    inject: false,
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true,
    },
    ...userConfig
}))

let baseConfig = {
    stats: { children: false },
    entry: entryMap,
    output: {
        filename: 'pages/[name]/index.js',
        chunkFilename: '[name].js',
        path: path.resolve(pwd, './build')
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
                test: /\.(jpg|jpeg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 10240,
                        outputPath: './images'
                    }
                }
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
        ...htmls
    ],
    optimization: {
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2, // 最少引用次数
                    priority: 10, // 优先级
                    name: 'vendor',
                },
                common: {
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2,
                    priority: 1,
                    name: 'common',
                }
            }
        }
    }
 };


 module.exports = baseConfig;