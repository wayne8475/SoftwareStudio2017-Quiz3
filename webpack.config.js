var path = require('path');

module.exports = {
	context: path.resolve(__dirname, './src'),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/], 
				use: [
						{
						loader: 'babel-loader', 
						options: {
							presets: [
								[
									'es2015', {modules: false}
								]
							] 
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	entry: {
		main: './main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	}
}