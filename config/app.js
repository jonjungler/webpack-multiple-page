const glob = require('glob');
const pathConfig = require('./path-config.js');

const options = {
  cwd: pathConfig.apps, // 在pages目录里找
  sync: true, // 这里不能异步，只能同步
};
const globInstance = new glob.Glob('*', options);
module.exports = globInstance.found; // 一个数组，形如['index/index', 'index/login', 'alert/index']