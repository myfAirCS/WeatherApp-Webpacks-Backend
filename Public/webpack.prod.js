const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const terserPlugin = require("terser-webpack-plugin");

const prodConfig = merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new terserPlugin({
        extractComments: false,
      }),
    ],
  },
});

module.exports = prodConfig;
