const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        '@babel/polyfill',
        './src/main.jsx',
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                ['@babel/preset-env', { modules: false }],
                                '@babel/preset-react'
                            ],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-syntax-import-meta",
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-proposal-json-strings",
                                [
                                    "@babel/plugin-proposal-decorators",
                                    {
                                        "legacy": true
                                    }
                                ],
                                "@babel/plugin-proposal-function-sent",
                                "@babel/plugin-proposal-export-namespace-from",
                                "@babel/plugin-proposal-numeric-separator",
                                "@babel/plugin-proposal-throw-expressions",
                                "@babel/plugin-proposal-export-default-from",
                                "@babel/plugin-proposal-logical-assignment-operators",
                                "@babel/plugin-proposal-optional-chaining",
                                [
                                    "@babel/plugin-proposal-pipeline-operator",
                                    {
                                        "proposal": "minimal"
                                    }
                                ],
                                "@babel/plugin-proposal-nullish-coalescing-operator",
                                "@babel/plugin-proposal-do-expressions",
                                "@babel/plugin-proposal-function-bind",
                                ['module-resolver', {
                                    root: ['./src'],
                                    alias: {
                                        underscore: 'lodash'
                                    }
                                }]
                            ]
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    },
                    {
                        loader: 'stylelint-custom-processor-loader'
                    }
                ],
                include: path.resolve(__dirname, '..', 'src')
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('prod')
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'auto',
            hash: true,
            inject: 'body',
            xhtml: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: '.eslintrc',
                    extensions: ['.js', '.jsx'],
                    ignorePath: '.gitignore',
                    cache: true,
                    formatter: require('eslint-friendly-formatter')
                },
                debug: false
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '..', 'src/favicon.ico'),
                to: path.resolve(__dirname, '..', 'dist/favicon.ico')
            }
        ])
    ]
};
