const path = require('path');
const rootDirectory = path.resolve( __dirname, '../../' );
const appDist = path.resolve( rootDirectory, '.tmp' );
const contentBase = path.resolve(__dirname, ".tmp");

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: contentBase,
        compress: true,
        port: 9000,
        open: true
    },

    output: {
        path: appDist,
        filename: 'index.js'
    }
};
