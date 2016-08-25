var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.ts',
    output: {
        path: "./dist",
        filename: "vue.solutions.js"
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
            {test: /\.ts$/, loader: 'ts'}
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