const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const dirSrc = path.resolve(__dirname, 'src')
const dirHtml = path.resolve(__dirname, 'html')
const dirBuild = path.resolve(__dirname, 'build')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: dirBuild,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: dirBuild,
  },
  resolve: {
    root: dirSrc,
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: dirHtml },
    ]),
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'cheap-eval-source-map',
}
