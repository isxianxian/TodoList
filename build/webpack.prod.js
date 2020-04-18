const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const prodConfig = {
    mode: 'production',
    performance: {
        hints: false, //出现 asset size limit等警告 
    }
}

module.exports = merge(baseConfig, prodConfig);

