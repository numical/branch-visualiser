const { HotModuleReplacementPlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/client/components/App.js",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "branch-visualiser.js"
  },
  devServer: {
    open: true,
    port: 8080,
    proxy: [{
      context: "/repos",
      target: "http://localhost:1971"
    }]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new CopyPlugin({ patterns: [{ from: "static", to: "." }] })
  ]
};
