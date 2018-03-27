const path = require('path');
const rootDirectory = path.resolve( __dirname, '../../' );
const appDist = path.resolve( rootDirectory, 'public' );
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    output: {
        path: appDist,
        filename: '[name]-bundle-[chunkhash].js'
    },

    plugins: [
        new UglifyJsPlugin()
    ]
};