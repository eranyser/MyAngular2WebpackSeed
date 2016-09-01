var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['./src/cons.ts', './src/main.ts'],
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            { test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" },
            { test: /\.ts$/, exclude: /node_modules/, loader: 'ts'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        /**
         * The HtmlWebpackPlugin readh the index.html from the src folder, 
         * add the corresoponding script tag and copy it to the dist folder
         */
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}