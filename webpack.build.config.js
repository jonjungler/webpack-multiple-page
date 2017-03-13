var config = require('./config/config.js')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = config.build.env;
}
var webpackConfig = require('./webpack.config.js')
module.exports = webpackConfig
