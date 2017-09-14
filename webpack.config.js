const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: "./index.js",
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "./bundle.js",
		publicPath: "dist/"
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: { loader: 'babel-loader' }
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
	  hot: true,
	  watchContentBase: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}