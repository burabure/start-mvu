const path = require('path')
const webpack = require('webpack')

const dirSrc = path.resolve(__dirname, 'src')
const dirBuild = path.resolve(__dirname, 'build')
const dirDist = path.resolve(__dirname, 'dist')

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
}

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: dirDist,
    filename: 'start-app.js',
    library: 'StartApp',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: dirBuild,
  },
  resolve: {
    root: dirSrc,
  },
  externals: {
    react: reactExternal,
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
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
}
