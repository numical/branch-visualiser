  const { HotModuleReplacementPlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/App.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'branch-visualiser.js'
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    proxy: {
      '/repos' : 'http://localhost:1971'
    }
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new CopyPlugin([
      { from: 'static', to: '.' }
    ]),
  ]
};
