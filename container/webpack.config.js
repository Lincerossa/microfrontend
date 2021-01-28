const htmlPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new htmlPlugin({
      template: './public/index.html'
    })
  ]
}