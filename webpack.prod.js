const { merge } = require("webpack_merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [new CleanWebpackPlugin()],
});