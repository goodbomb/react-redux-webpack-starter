var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var fontMagician  = require('postcss-font-magician');
var simpleVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var styleLintPlugin = require('stylelint-webpack-plugin');

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
    debug: false,
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap',
                    'postcss'
                ),
                include: path.resolve(__dirname, '..', 'src')
            },
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader?presets[]=es2015,presets[]=stage-1,presets[]=react',
                    'eslint-loader'
                ],
                include: path.resolve(__dirname, '..', 'src')
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx']
    },
    eslint: {
        configFile: '.eslintrc',
        extensions: ['.js', '.jsx'],
        ignorePath: '.gitignore',
        cache: true,
        formatter: require('eslint-friendly-formatter')
    },
    postcss: function () {
        return [
            autoprefixer,
            simpleVars,
            cssNested,
            fontMagician
        ];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin('bundle.css', {
            allChunks: true
        }),
        new styleLintPlugin({
            configFile: path.resolve(__dirname, '..', '.stylelintrc'),
            context: path.resolve(__dirname, '..', 'src'),
            files: '**/*.?(scss|css)',
            failOnError: false,
        })
    ]
};
