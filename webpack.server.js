const path = require('path');

module.exports = {
  name: "server-side rendering",
  entry: "./server/index.js",
  target: "node",
  output: {
    path: path.join(__dirname, '/server'),
    filename: "server.generated.js",
    publicPath: "/server"
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: { loader: 'ignore-loader' }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
