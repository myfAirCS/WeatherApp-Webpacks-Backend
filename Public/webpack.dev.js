const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 8080, // Corrected the port number to match typical usage
    open: true,
    hot: true,
  },
};

module.exports = merge(commonConfig, devConfig); // Merge and export correctly
