const merge = require('webpack-merge')
// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// Configs
const baseConfig = require('./webpack.config')

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        // runtimeChunk: 'single',
        // splitChunks: {
        //   cacheGroups: {
        //     vendor: {
        //       test: /[\\/]node_modules[\\/]/,
        //       name: 'vendors',
        //       chunks: 'all'
        //     }
        //   }
        // },
        minimizer: [new UglifyJsPlugin()]
      },
      plugins: [new MiniCssExtractPlugin(), new OptimizeCssAssetsPlugin()]
    }
  ])
}

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env))
}
