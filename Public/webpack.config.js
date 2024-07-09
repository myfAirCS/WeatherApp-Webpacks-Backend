const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    devtool:"eval-source-map",
    entry: "./src/index.ts", 
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: "index.js", 
    },
    resolve: {
        extensions: ['.ts', '.js'] 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", 
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ["typescript-loader"], 
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
                include: path.resolve(__dirname, "src") 
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset/resource", 
                generator: {
                    filename: 'assets/[hash][ext][query]'
                },
                include: path.resolve(__dirname, "src/assets") 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"), 
            filename: "index.html"
        })
    ]
};
