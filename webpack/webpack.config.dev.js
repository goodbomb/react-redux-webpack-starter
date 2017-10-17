const path = require('path');
const webpack = require('webpack');

const API_URL = process.env.API_URL || 'http://localhost:5555/';

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true?path=http://localhost:5000/__webpack_hmr',
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: [
                                'react-hot-loader/babel',
                                'transform-class-properties',
                                'transform-decorators-legacy',
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
                        loader: 'eslint-loader?{rules:{"no-console":0}}'
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
                            name: '[name].[ext]'
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
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: '.eslintrc',
                    extensions: ['.js', '.jsx'],
                    ignorePath: '.gitignore',
                    cache: true,
                    formatter: require('eslint-friendly-formatter')
                },
                debug: true
            }
        })
    ]
};
