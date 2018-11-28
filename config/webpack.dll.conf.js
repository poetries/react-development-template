const path = require('path')
const webpack = require('webpack')

const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const dllLib = require('./index').dllLib

module.exports = {
  entry: dllLib,
  output: {
    path: path.resolve(__dirname, "../public/static/js"),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', 'dll/[name].manifest.json'),
      name: '[name]_library'
    }),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    })
  ]
}
