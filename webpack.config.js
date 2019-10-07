const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js'
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/, use: {loader: "babel-loader"}
    },
    {
      test: /\.css$/i,
      use:  [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
      test: /\.(png|jpe?g|gif|ico|svg)$/,
      use: 
        [
          'file-loader?name=./images/[name].[ext]',
          {loader: 'image-webpack-loader', options: {}},
        ],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/[name].[ext]'
    }
    ]
    },
    plugins: [
      new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
        preset: ['default'],
        },
        canPrint: true
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      }),
      new WebpackMd5Hash(),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })               
  ]
};
