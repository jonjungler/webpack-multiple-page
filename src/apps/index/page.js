const header = require('../../components/header/page.js');
const footer = require('../../components/footer/page.js');
const index = require('./index.ejs');
const banner = require('../../components/banner/page.js');
const components = {
	headerDiv: header,
	footerDiv: footer(),
	bannerDiv:banner()
}

module.exports = index(components);