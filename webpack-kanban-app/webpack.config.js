const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "index.html"
});

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('./src/dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [HtmlWebPackPluginConfig]
}


module.exports = config;