var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var fontMagician  = require('postcss-font-magician');
var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
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
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader?presets[]=es2015,presets[]=stage-1,presets[]=react',
                    'eslint-loader'
                ],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    eslint: {
        configFile: '.eslintrc',
        extensions: ['.js', '.jsx'],
        ignorePath: '.gitignore',
        cache: true,
        formatter: require('eslint-friendly-formatter')
    },
    stylelint: {
        configFile: path.join(__dirname, '.stylelint.config.json')
    },
    postcss: function () {
        return [
            autoprefixer,
            precss,
            fontMagician
        ];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
        new styleLintPlugin({
            configFile: path.join(__dirname, '.stylelintrc'),
            context: 'inherits from webpack',
            files: '**/*.?(scss|css)',
            failOnError: false,
        })
    ]
};
