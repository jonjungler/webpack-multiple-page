var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var webpack = require("webpack");
var exTxt = require('extract-text-webpack-plugin');
var entryConfig= require('./config/app-entry.js');
var outputConfig = require('./config/output-config.js');
var apps = require('./config/app.js');
var pluginConfig = require('./config/plugins-config.js');
var config = require('./config/config.js')
require("babel-polyfill");
var localEnv = process.env.NODE_ENV == 'production' ? 'build' : 'dev'
var minimizeCss = config[localEnv].minimizeCss
var filePublicPath = config[localEnv].fileUseLocalPath ? 'file:///'+(path.resolve(__dirname,'./dist/')+'/').replace(/\\/g,'/') : config[localEnv].publicPath


module.exports = {
	entry:entryConfig,
	output:outputConfig,
	plugins:pluginConfig,
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:path.resolve(__dirname,'ndoe_modules'),
				include:path.resolve(__dirname,'./src/'),
				//在webpack。json中写入
				query:{
					presets:['env']
				}
			},
			// {
			// 	test:/\.css$/,
			// 	loader:'style-loader!css-loader?importLoaders=1'
			// },
			{
				test:/\.css$/,
				loader:exTxt.extract({fallback:"style-loader",use:["css-loader"+(minimizeCss?'?minimize=true':''),'postcss-loader']})
			},
			{
				test:/\.less$/,
				loader:exTxt.extract({fallback:"style-loader",use:['css-loader'+(minimizeCss?'?minimize=true':''),'postcss-loader','less-loader']})
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/\.(png|jpg|svg|gif)$/,
				// loader:'file-loader',
				loader:'url-loader?limit=3&name=assets/[name]-[hash:5].[ext]&publicPath='+filePublicPath+'!image-webpack-loader',
				// query:{
				// 	limit:3,
				// 	name:'../assets/[name]-[hash].[ext]'
				// }
			},
			{
				test:/\.ejs$/,
				loader:'ejs-loader'
			}
		]
	}
}