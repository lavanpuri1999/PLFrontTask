const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log(env);
    return {
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
            use : CSSExtract.extract({
            use:    [
                {
                    loader:'css-loader',
                    options:{
                        sourceMap:true,
                    }
                },
                {
                    loader:'sass-loader',
                    options:{
                        sourceMap:true,
                    }
                }
            ]
          })
        }]
    },
    plugins: [
        CSSExtract
    ],
    devtool : isProduction ? 'source-map' : 'inline-source-map',
    devServer : {
        contentBase: path.join(__dirname,'public'),
        hot: true,
        compress:true,
        historyApiFallback: true
    }
}
}