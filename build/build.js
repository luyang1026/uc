process.env.NODE_ENV = 'production'

var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var config = require('./config')

var ora = require('ora')
var chalk = require('chalk')
var rm = require('rimraf')
var path = require('path')
var spinner = ora('building for production')
spinner.start()

rm(config.build.assetsRoot, err => {
	if (err) throw err
	webpack(webpackConfig,(err,stats)=>{
		spinner.stop()
		if (err) throw err
		process.stdout.write(stats.toString({
		  colors: true,
		  modules: false,
		  children: false,
		  chunks: false,
		  chunkModules: false
		}) + '\n\n')
		console.log(chalk.cyan('Build complete.\n'))
	})
})
