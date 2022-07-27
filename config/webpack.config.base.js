const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.appSrc
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app',
      template: paths.appHtml,
      inject: false,
    })
  ]
}