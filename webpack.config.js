const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/ts/index.ts',
    './src/css/style.css',
    './src/index.html'
    ],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            exclude: /node_modules/,
        },
        {
            test: /\.html$/i,
            loader: 'file-loader',
            exclude: /node_modules/,
            options: {
              name: '[name].[ext]',
            },
        },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.html'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};