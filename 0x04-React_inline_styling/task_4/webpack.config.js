const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    // index: path.resolve(__dirname, 'js/dashboard_main.js'),
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  performance: {
    maxAssetSize: 1000000
  },

  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public')
    // },
    // compress: true,
    // port: 8564,

    contentBase: './public',
    port: 8564

  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // {
      //   test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      //   use: [
      //     'file-loader',
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         disable: true
      //       }
      //     }
      //   ]
      // },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin()
  ]
}