const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: "./index.js",
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "./bundle.js"
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
	  hot: true
	}
}