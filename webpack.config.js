const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'souce-map',
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    redux_app: path.resolve(__dirname, 'src/redux-app/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', {'legacy': true}],
              ['transform-class-properties'],
              ['transform-react-jsx']
            ]
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'MobX',
      template: './index.html'
    }),
    new webpack.ProvidePlugin({
      '_': 'lodash'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 3000,
    historyApiFallback: true
  }
}
