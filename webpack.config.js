const argv = require('yargs').argv;
const webpackMerge = require('webpack-merge');
const commonConfig = require("./config/webpack/webpack-common.config");
const devConfig = require("./config/webpack/webpack-dev.config");
const prdConfig = require("./config/webpack/webpack-prd.config");
const envConfig = argv.mode === 'production' ? prdConfig : devConfig;
module.exports = webpackMerge(commonConfig, envConfig);