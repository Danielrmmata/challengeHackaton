const HtmlWebpackPlugin = require('html-webpack-plugin')

const { resolve } = require('path')

const context = resolve(__dirname, 'src')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React, Tailwind and Webpack 5 Boilerplate',
      favicon: './src/assets/favicon.svg',
      template: './public/index.html',
    })
  ],
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

  
  devServer : {
    port: 3000,
    historyApiFallback: true
}
};
