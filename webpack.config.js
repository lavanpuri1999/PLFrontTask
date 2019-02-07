const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    output : {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    plugins:[new HtmlWebpackPlugin({
        title: 'Project',
        template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
],
    module:{
        rules: [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/
        },
        {
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase: path.join(__dirname,'public'),
        hot: true,
        compress:true,
        historyApiFallback: true
    }
};