const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('./path');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: "pre"
      },
      {
        test: /\.(tsx|ts)/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app',
      template: path.appHtml,
      inject: false,
    })
  ]
}