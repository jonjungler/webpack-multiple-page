const path = require('path');

const pathModule = {};
pathModule.rootPath = path.resolve(__dirname,'../');
pathModule.src = path.resolve(pathModule.rootPath,'./src');
pathModule.apps = path.resolve(pathModule.src,'./apps');
pathModule.dist = path.resolve(pathModule.rootPath,'./dist');

module.exports = pathModule;