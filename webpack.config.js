const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = env => {
  const { PLATFORM, VERSION } = env
  return merge([
    {
      entry: {
        bundle: APP_DIR + '/index.js'
      },
      output: {
        path: BUILD_DIR,
        filename: '[name].js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(png|svg|jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 25000
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        })
        /** Static images variant:
         * new CopyWebpackPlugin([{ from: 'src/static' }])
         * */
      ]
    }
  ])
}
