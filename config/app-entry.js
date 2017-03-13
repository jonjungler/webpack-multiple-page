const apps = require('./app.js');
const path = require('path');
const pathConfig = require('./path-config.js');

const entry = {};
apps.forEach(function (page) {
	entry[page] = path.resolve(pathConfig.apps,page+'/entry.js');
});
module.exports = entry; 