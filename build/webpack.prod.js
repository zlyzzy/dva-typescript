
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

const targetPath = path.join(__dirname, '../');
const targetFolder = 'dist';

module.exports = function (env) {
  return merge(commonConfig, {
    mode: env,
    entry: {
      bundle: './src/index.tsx',
    },
    output: {
      path: path.join(__dirname, '/../dist/'),
      filename: 'assets/js/[name][hash].js',
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      //清除dist
      new CleanWebpackPlugin([targetFolder], {
        root: `${targetPath}`,
      })
    ],
  });
};
