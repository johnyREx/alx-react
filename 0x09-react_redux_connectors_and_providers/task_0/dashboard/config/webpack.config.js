const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Adjusted path to use __dirname
    assetModuleFilename: 'images/[hash][ext][query]', // Adjusted assetModuleFilename
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"), // Adjusted path to use __dirname
    },
    compress: true,
    port: 9000,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource', // Using asset/resource for image files
      },
    ],
  },
};
