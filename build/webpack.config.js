const webpack = require('webpack');
const path = require('path');
const CleanCSSPlugin = require('less-plugin-clean-css');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const package = require(path.join(__dirname, '../package.json'));
const configJson = require(path.join(__dirname, '../config/default.json'));
configJson.version = package.version;
const DEV_MODE = process.env.NODE_ENV === 'development';

const config = {
    entry: {
        main: path.join(__dirname, '../src/scripts/main.tsx')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'scripts/[name].js'
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader',
                        options: {
                            plugins: [
                                new CleanCSSPlugin({ advanced: true })
                            ]
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=/assets/images/[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles/[name].css'),
        new HtmlWebpackPlugin({
            title: package.author + ': ' + package.description,
            version: package.version,
            DEV_MODE: DEV_MODE,
            template: path.join(__dirname, '../src/index.hbs')
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less', '.json']
    }
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(
        new UglifyJSPlugin({
            comments: false,
            mangle: {
                except: ['exports', 'require']
            }
        })
    );
}

const definePlugin = new webpack.DefinePlugin({
    appConfig: JSON.stringify(configJson),
    DEV_MODE: DEV_MODE,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
});

config.plugins.push(definePlugin);

module.exports = config;