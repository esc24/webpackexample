const HtmlWebpackPlugin = require('html-webpack-plugin') 
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: 'textures', to: 'textures' }
    ])
  ]
};
