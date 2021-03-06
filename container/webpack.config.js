const htmlPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: 'development',
  devServer: {
    port: 8085
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        other: 'other@http://localhost:8083/remoteEntry.js',
      },
    }),
    new htmlPlugin({
      template: './public/index.html'
    })
  ]
} 