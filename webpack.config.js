const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: "./index.js",
	output: {
		path: path.join(__dirname, 'built'),
		filename: "./bundle.js"
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
                	plugins: ["transform-react-jsx"],
                	presets: ["env", "react"]
            	}
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	watch: true
}