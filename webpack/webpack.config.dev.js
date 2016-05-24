var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var fontMagician  = require('postcss-font-magician');
var simpleVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:5000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'postcss'
                ],
                include: path.resolve(__dirname, '..', 'src')
            },
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader?cacheDirectory',
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
    devServer: {
        hot: true,
        historyApiFallback: {
            index: '/'
        },
        contentBase: './src'
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
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new styleLintPlugin({
            configFile: path.resolve(__dirname, '..', '.stylelintrc'),
            context: path.resolve(__dirname, '..', 'src'),
            files: '**/*.?(scss|css)',
            failOnError: false
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
