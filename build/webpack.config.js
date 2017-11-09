const path = require('path');
const CleanCSSPlugin = require('less-plugin-clean-css');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
            title: 'Stefan Mitev - Personal Profile Web',
            template: path.join(__dirname, '../src/index.ejs')
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less', '.json']
    }
};

if (process.env.NODE_ENV !== 'local') {
    config.plugins.push(
        new UglifyJSPlugin({
            comments: false,
            mangle: {
                except: ['exports', 'require']
            }
        })
    );
} else {
    config.devtool = 'source-map';
}

module.exports = config;