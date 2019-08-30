const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true?path=http://localhost:5000/__webpack_hmr',
        'react-hot-loader/patch',
        '@babel/polyfill',
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
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/'),
            'react-dom': '@hot-loader/react-dom'
        },
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
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
