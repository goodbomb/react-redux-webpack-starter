var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './src/main.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css?sourceMap', 'postcss'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loaders: [
                    'react-hot',
                    'babel-loader?cacheDirectory,presets[]=stage-1,presets[]=react,presets[]=es2015',
                    'eslint-loader'
                ],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
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
        return [autoprefixer, precss];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new styleLintPlugin({
            configFile: path.join(__dirname, '.stylelintrc'),
            context: path.join(__dirname, 'src'),
            files: '**/*.s?(a|c)ss',
            failOnError: false
        })
    ]
};
