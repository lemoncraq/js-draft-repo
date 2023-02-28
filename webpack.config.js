const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] },
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
};
