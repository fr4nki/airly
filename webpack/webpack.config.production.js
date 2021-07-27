const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const globalConfig = require('./webpack.params');

module.exports = {
  entry: {
    airly: globalConfig.helpers.fromSource('application/index.tsx')
  },

  output: {
    path: globalConfig.paths.build,
    publicPath: '',
    filename: '[name].js',
    chunkFilename: `airly.${globalConfig.build.version}.[id].[chunkhash].js`,
  },

  devtool: 'hidden-source-map',

  target: 'web',

  mode: 'production',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [globalConfig.paths.source, 'node_modules'],
    alias: {
      '@': globalConfig.paths.source,
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
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

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: {
      name: () => `airly.${globalConfig.build.version}.runtime`,
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');

            return `airly.${globalConfig.build.version}.${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CompressionPlugin({
      algorithm: 'gzip',
      exclude: [/.map$/, /.html$/],
    }),

    new HtmlWebpackPlugin({
      template: globalConfig.helpers.fromSource('application/index.html'),
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      filename: `[name].${globalConfig.build.version}.css`,
      chunkFilename: `airly.${globalConfig.build.version}.[id].[chunkhash].css`,
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        enabled: true,
        configFile: globalConfig.helpers.fromSource('../tsconfig.json'),
        context: globalConfig.helpers.fromSource('../'),
      },
      eslint: {
        enabled: true,
        files: [
          globalConfig.helpers.fromSource('**/*.ts'),
          globalConfig.helpers.fromSource('**/*.tsx'),
        ],
      }
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_MODE': JSON.stringify(process.env.APP_MODE),
      'process.env.APP_BUILD': JSON.stringify(process.env.APP_BUILD),
      'process.env.APP_SENTRY_DSN': JSON.stringify(process.env.APP_SENTRY_DSN),
    }),
  ],
};
