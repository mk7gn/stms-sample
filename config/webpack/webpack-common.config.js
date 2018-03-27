const path = require('path');
const rootDirectory = path.resolve( __dirname, '../../' );
const appRoot = path.resolve( rootDirectory, 'src' );
const entryPoint = path.resolve(appRoot,'index.ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: entryPoint,
    context: appRoot,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'tslint-loader',
                    options: {
                        emitErrors: true
                    }
                },
                enforce: 'pre'
            },

            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: [
                    'ng-annotate-loader',
                    'awesome-typescript-loader'
                ]
            },

            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                    publicPath: './'
                })
            },

            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },

            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader?outputPath=fonts/'
            },

            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'file-loader?name=templates/[hash].[ext]!extract-loader!html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'stms sample',
            template: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    configuration: require(path.resolve(rootDirectory, 'tslint.json')),
                    typeCheck: true
                }
            }
        }),
        new ExtractTextPlugin('css/style.css')
    ]
};