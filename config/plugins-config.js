var exTxt = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var htmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
var pathConfig = require('./path-config.js');
var apps = require('./app.js');
var config = require('./config.js')
var currentConfig = config[process.env.NODE_ENV == 'production' ? 'build' : 'dev']
var plugins = [
//提取css
		new exTxt({
			filename:'[name]/css/style.css',
			// filename:(getPath)=>{
			// 	return getPath('[name]/css/style.css').replace('[name]/css','');
			// },
			// allChunks: true
		}),
		new webpack.LoaderOptionsPlugin({options: {
				postcss:[
					require('autoprefixer')({
											browsers:["last 5 versions"]
										})
				]
			}
		}),
	    new webpack.ProvidePlugin({
            $: 'jquery',
            jquery:'jquery',
            "window.jquery":'jquery'
        }),
	    new CommonsChunkPlugin({
		    name: 'commons/commons',      // 需要注意的是，chunk的name不能相同！！！
		    filename: '[name]/bundle.js',
		    minChunks: 2,
		  })
];

// 压缩
if (currentConfig.userUglifyJsPlugin) {
	plugins.push( new webpack.optimize.UglifyJsPlugin({
		      compress: {
		        warnings: false
		      },
	      mangle: false,//代码混淆
	      sourceMap: false,
	      except: ['$super', '$', 'exports', 'require']    //排除关键字
	    })
	)
}

apps.forEach(function (app) {
	var htmlPlugin = new htmlWebpackPlugin({
						filename:path.resolve(pathConfig.dist,`./${app}/index.html`),
						template:path.resolve(pathConfig.apps,`./${app}/page.js`),
						inject:"body",
					    minify: currentConfig.minifyHtml ? 
					    {
					        removeComments: true,
					        collapseWhitespace: true,
					        removeAttributeQuotes: true
					        // more options:
					        // https://github.com/kangax/html-minifier#options-quick-reference
					    }:{},
					    chunks:[app,'commons/commons']
					});
	plugins.push(htmlPlugin);
})

module.exports = plugins;
