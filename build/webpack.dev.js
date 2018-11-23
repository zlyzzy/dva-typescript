
// const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

module.exports = function (env) {
  return merge(commonConfig, {
    mode: env,
    entry: {
      bundle: './src/index.tsx',
    },
    output: {
      filename: 'assets/js/[name].js',
      sourceMapFilename: '[name].map',
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      hot: true,
      open: true,
      stats: 'normal',
      host:'0.0.0.0',
      contentBase: './src/',
      compress: true,
      port: 8000,
      proxy: {
        '/api': {
          target: 'http://localhost:7001/',
          secure: false,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    
  });
};
