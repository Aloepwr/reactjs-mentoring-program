const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: path.join(__dirname, 'src'),
  
  entry: {
    bundle: ["./index"]
  },
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: "/dist/"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },

      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, 
          {
            loader: 'less-loader',
          }]
        })
      }
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};