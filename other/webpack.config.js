const htmlPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: 'development',
  devServer: {
    port: 8083
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "other",
      filename: "remoteEntry.js",
      exposes: {
        "./OtherIndex": './src/index'
      }
    }),
    new htmlPlugin({
      template: './public/index.html'
    })
  ]
}