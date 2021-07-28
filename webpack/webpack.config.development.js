const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const globalConfig = require('./webpack.params');

module.exports = {
  entry: {
    airly: globalConfig.helpers.fromSource('application/index.tsx'),
  },

  output: {
    path: globalConfig.paths.build,
    publicPath: '',
    filename: '[name].js',
  },

  devtool: 'inline-source-map',

  mode: 'development',

  stats: 'errors-warnings',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    modules: [globalConfig.paths.source, 'node_modules'],
    alias: {
      '@': globalConfig.paths.source,
    },
  },

  devServer: {
    contentBase: globalConfig.paths.build,
    port: globalConfig.server.port,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: globalConfig.helpers.fromSource('application/index.html'),
      filename: 'index.html',
    }),

    new webpack.HotModuleReplacementPlugin(),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        enabled: true,
        configFile: globalConfig.helpers.fromSource('../tsconfig.json'),
        context: globalConfig.helpers.fromSource('../'),
      },
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_MODE': JSON.stringify(process.env.APP_MODE),
      'process.env.APP_BUILD': JSON.stringify(process.env.APP_BUILD),
      'process.env.APP_SENTRY_DSN': JSON.stringify(process.env.APP_SENTRY_DSN),
    }),
  ],
};
