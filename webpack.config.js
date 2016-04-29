var path = require("path");

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main.js',
        'webpack-dev-server/client?http://localhost:9000'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/, 
                include: path.join(__dirname, 'src'),
                loader: "style!css"
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: {
            index: '/'
        },
        contentBase: './src'
    }
};