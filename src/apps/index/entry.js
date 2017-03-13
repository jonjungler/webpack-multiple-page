require('../../style/reset.css');
require('./style.less');
const banner = require('../../js/banner.js');
require('../../js/common.js');
require('../../components/header/entry.js');
require('../../components/banner/entry.js');
require('../../components/footer/entry.js');

$(document).ready(function () {
	// var banner = new bannerObj($(".menu .banner-list"),".banner-item");
	// var bannerController = new bannerControl($(".menu .banner-control"),".control-item",banner.itemNum,banner.selectNum);
	$(".content-item .banner-ul").each(
			function () {
				var $bannerUl = $(this);
				var contentBanner = new banner.bannerObj($bannerUl,".banner-item",true);
				var $bannerController = $bannerUl.next(".banner-controller").eq(0);
				var contentC = new banner.bannerControl($bannerController,".control-item",contentBanner.itemNum,contentBanner.selectNum);
				contentBanner.selectChange = contentC.checkNum;
			})
})