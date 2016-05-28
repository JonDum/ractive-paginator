
var webpack = require('webpack');

module.exports = {
    entry: ['src/paginator'],
    output: {
        path: __dirname + '/',
        filename: 'ractive-paginator.js',
        library: 'RactivePaginator',
        libraryTarget: 'umd'
    },
    resolve: {
        root: process.cwd(),
        modulesDirectories: ['node_modules', 'bower_components', 'css', 'js', 'templates'],
        extensions: ['', '.js', '.styl', '.html'],
    },
}

