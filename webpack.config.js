const HtmlPlugin = require('html-webpack-plugin');

const { resolve } = require('path');

const context = resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
        },
      },

      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  plugins: [
    new HtmlPlugin({
      title: 'React, Tailwind and Webpack 5 Boilerplate',
      template: './public/index.html',
      favicon: './src/assets/favicon.svg',
    }),
  ],
  devServer: {
    port: 5000,
    historyApiFallback: true,
},
};

