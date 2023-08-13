const {merge} = require('webpack-merge');
const mainConfig = require('./webpack.config.main');

module.exports = merge(mainConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        open: true
    }
})
