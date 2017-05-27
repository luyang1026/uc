var webpack = require('webpack')
var path = require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		usercenter: './src/main.js',
	},
	output: {
		// filename: '[name].[chunkhash].js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'..','dist')
	},
	module: {
		rules:[
			{test: /\.(css|less)$/, use: ['style-loader', 'css-loader','less-loader']},
			{test: /\.(png|jpg)$/, use: ['url-loader?limit=8192']},
			{test: /\.html$/, use: ['html-loader']},
			{test: require.resolve('zepto'), use: ['exports-loader?window.Zepto','script-loader']},
		]
	},
	plugins:[
		// new webpack.optimize.UglifyJsPlugin()
	]

}