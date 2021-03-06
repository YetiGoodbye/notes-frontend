const resolve = require('path').resolve;
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

const createBaseConfig = require('./base.config.js');

function createDevConfig(env){

  const baseConfig = createBaseConfig(env);

  const devConfig = {
    mode: 'development',
    output: {
      filename: 'bundle.[hash:8].js',
      publicPath: '/',
    },
    module: {
      rules: [{
        test: /\.scss|\.css$/,
        use: [
            "style-loader",
            'css-loader',
            "sass-loader",
        ],
      }],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(env.base, 'webpack/index.html'),
        title: 'Notes',
        inject: 'head',
        favicon: resolve(env.base, 'webpack/favicon.ico'),
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
      }),
      new HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      port:8001,
      hot: true,
      noInfo: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    }
  };

  return merge(baseConfig, devConfig);
}


module.exports = createDevConfig;
