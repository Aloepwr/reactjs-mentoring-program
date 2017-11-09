const path = require('path');

module.exports = {
  name: "server-side rendering",
  entry: "./server/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, './server'),
    filename: "server.generated.js",
    publicPath: "server"
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

// set BABEL_DISABLE_CACHE=1&& set BABEL_ENV=server&& babel-node src/server/server.js
// SET BABEL_ENV=node && babel-node --presets es2015,react --plugins babel-plugin-transform-require-ignore ./server/index.js