const path = require('path');
const HTMLWebPAckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry:'./src/index.tsx',
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:'bundle.js'
    },
    resolve: {
        extensions:[".ts",".tsx",".js",".jsx",".json"]
    },
    module: {
        rules: [
            {
                test:/\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test:/\.js?$/,
                loader:"source-map-loader"
            },
            {
                test:/\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        
        ]
    },
    plugins: [
        new HTMLWebPAckPlugin({
            template:'src/index.html'
        }),
        new MiniCssExtractPlugin("styles.css")
    ],
    devtool:"source-map",
    devServer: {
        historyApiFallback: true,
    }
};