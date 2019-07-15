/**
 * 给开发者提供的配置入口，避免直接更改核心配置部分。
 */

module.exports = {
    name: 'webpacktest',
    description: 'this is a webpack test demo',
    pages: [
        {
            title: '首页',
            entry: 'home',
            src: 'src/pages/home/index.js',
            filename: 'index.html',
        },
        {
            title: '列表页',
            entry: 'list',
            src: 'src/pages/list/index.js',
            filename: 'index.html',
        }
    ]
}
 