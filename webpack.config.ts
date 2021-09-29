import * as path from 'path';
import * as webpack from 'webpack';
// import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
  },
  entry: {
    base: './pages/base/index.tsx',
    other: './pages/other/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    })
  ],
};

export default config;
