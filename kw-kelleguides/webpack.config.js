const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const path = require("path")

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3002/",
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "kelleguides",
      library: { type: "var", name: "kelleguides" },
      filename: "remoteEntry.js",
      remotes: {
        dashboard: "dashboard",
      },
      exposes: {
        KelleGuideApp: "./src/kelleguide",
      },
      shared: ["react", "react-dom", "react-router-dom", "styled-components"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
