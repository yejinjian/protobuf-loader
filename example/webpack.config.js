var path = require("path");
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: './entry.js',
	//target: 'node',
	externals: {
		//protobufjs: 'require(\'../../node_modules/protobufjs\')',
	},
	output: {
		path: path.join(__dirname, 'out'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.proto$/,
				loader: path.join(__dirname, "..")
			}
		]
	}
};
