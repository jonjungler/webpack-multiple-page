require('./banner.less');
const bannerFun = require('../../js/banner.js');

$(document).ready(function () {
	var banner = new bannerFun.bannerObj($(".banner .banner-list"),".banner-item");
	var bannerController = new bannerFun.bannerControl($(".banner .banner-control"),".control-item",banner.itemNum,banner.selectNum);
	banner.selectChange = bannerController.checkNum;
})
