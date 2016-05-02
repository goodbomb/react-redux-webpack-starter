var path = require('path');
var webpack = require('webpack');

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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=es2015&presets[]=react',
                    'eslint-loader'
                ],
                include: path.join(__dirname, 'src')
            }]
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
    }
};
