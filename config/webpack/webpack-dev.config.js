const path = require('path');
const rootDirectory = path.resolve( __dirname, '../../' );
const appDist = path.resolve( rootDirectory, '.tmp' );

module.exports = {
    devtool: 'cheap-module-source-map',

    output: {
        path: appDist,
        filename: 'index.js'
    }
};
