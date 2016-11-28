var webpack = require('webpack'),  
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: "./src/index.tsx",
        common:['react', 'react-dom']
    },
    output: {
        filename: "./dist/bundle.js",
    },

    

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript" },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("css", {publicPath: '../../'})},

        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html'
        }),
        new ExtractTextPlugin('assets/css/styles.css',{
            allChunks: true
        }),
    ],
    debug: true,
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }

};
