var path = require('path'), 
    webpack = require('webpack');
var eslintrcPath = path.resolve(__dirname, '.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, './dist'),
    mainPath = path.resolve(__dirname, './index.js');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client','./index'],
  module: {
    preLoaders: [
      {
          test: /\.js$/,
          loaders: ['eslint'],
          exclude: /node_modules/,
          include: __dirname
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ],
  eslint: {
      configFile: eslintrcPath
  }
}
