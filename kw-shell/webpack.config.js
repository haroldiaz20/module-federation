const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const path = require("path")

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "KwShell",
      library: { type: "var", name: "KwShell" },
      filename: "remoteEntry.js",
      remotes: {
        kelleguides: "kelleguides",
        dashboard: "dashboard",
      },
      exposes: {
        reducer: "./src/reducer",
      },
      shared: ["react", "react-dom", "react-router-dom", "styled-components"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
