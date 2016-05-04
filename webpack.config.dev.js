var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var fontMagician  = require('postcss-font-magician');
var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:5000',
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
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'postcss'
                ],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loaders: [
                    'react-hot-loader/webpack',
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
        return [
            autoprefixer,
            precss,
            fontMagician
        ];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new styleLintPlugin({
            configFile: path.join(__dirname, '.stylelintrc'),
            context: path.join(__dirname, 'src'),
            files: '**/*.?(scss|css)',
            failOnError: false
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
