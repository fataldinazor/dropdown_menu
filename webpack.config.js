const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: "raw-loader",
      },

    ],
  },
};
