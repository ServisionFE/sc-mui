const path = require('path');

module.exports = {
    moduleName: 'sc-mui',
    prefixCls: 'sui-',
    build: {
        env: {
            NODE_ENV: 'production'
        },
        outputRootPath: path.resolve(__dirname, '../dist'),
        publicPath: '/' 
    },
    dev: {
        env: {
            NODE_ENV: 'development'
        },
        publicPath: '/',
        port: 8080
    }
};