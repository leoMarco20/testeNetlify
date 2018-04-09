const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const CopyWebpackPlugin = require('copy-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const i18n = require('./src/i18n.js');


function config(lang) {

    var base = lang ? ("/" + lang) : ""

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist/' + (lang ? lang + '/' : ""))
        },

        module: {
            rules: [

                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },

                {
                    test: /\.(png|jpg|gif|mp4)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                },

                {
                    test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                    loader: 'url-loader'
                },

                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },

                {
                    test: /\.pug$/,
                    use: [
                        "file-loader?name=[name]/index.html",
                        "extract-loader",
                        "html-loader", 
                        {
                            loader: "pug-html-loader",
                            options: {
                                data: { t: i18n.translator(lang), lang: lang || i18n.def, base: base}
                            }
                        }
                    ]
                },


                {
                    test: /index\.pug$/,
                    use: [
                        "file-loader?name=[name].html",
                        "extract-loader",
                        "html-loader",
                        {
                            loader: "pug-html-loader",
                            options: {
                                data: { t: i18n.translator(lang), lang: lang || i18n.def, base: base}
                            }
                        }
                    ]
                },


                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }],
                        fallback: "style-loader"
                    })
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin("bundle.css"),
            new CopyWebpackPlugin([{ from: './src/state_manager', to: 'state_manager' }, { from: './src/admin', to: 'admin' }]),
            new UglifyJSPlugin({ comments: false, sourceMap: false })
        ]
    };
}

module.exports = [config(""), config("pt"), config("en")]

