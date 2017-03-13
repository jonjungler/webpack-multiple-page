var pathConfig = require('./path-config.js');

var output = {
		path:pathConfig.dist,
		publicPath:"../",
		filename:"[name]/js/[name].js",
  		chunkFilename: '[id].bundle.js',
	}

module.exports = output;