const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackProductionConfig = require('./webpack.config.build.production');

module.exports = merge(
  webpackProductionConfig,
  {
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
  }
)
