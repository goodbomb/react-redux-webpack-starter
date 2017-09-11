var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var styleLintPlugin = require('stylelint-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
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
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer'),
                                require('postcss-simple-vars')({
                                    variables: () => require('../src/theme/styleConfig.js')
                                }),
                                require('postcss-nested'),
                                require('postcss-calc'),
                                require('postcss-font-magician')
                            ]
                        }
                    }
                ],
                include: path.resolve(__dirname, '..', 'src')
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                ['es2015', { modules: false }],
                                'react',
                                'stage-1'
                            ],
                            plugins: [
                                'react-hot-loader/babel',
                                'transform-class-properties',
                                'transform-decorators-legacy',
                                ['module-resolver', {
                                    root: ['./src'],
                                    alias: {
                                        test: './test',
                                        underscore: 'lodash'
                                    }
                                }]
                            ]
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ],
                include: path.resolve(__dirname, '..', 'src')
            }
        ]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.NoErrorsPlugin(),
        new styleLintPlugin({
            configFile: path.resolve(__dirname, '..', '.stylelintrc'),
            context: path.resolve(__dirname, '..', 'src'),
            files: '**/*.?(scss|css)',
            failOnError: false
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
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
        })
    ]
};
