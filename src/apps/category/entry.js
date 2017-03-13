require('../../style/reset.css');
require('./style.less');
require('../../components/header/entry.js');
require('../../components/banner/entry.js');
require('../../components/footer/entry.js');
require('../../components/categoryItem/entry.js');

require('../../js/common.js');

$(document).ready(function () {
	$(".left-menu .menu-item").last().css({
		border:"none"
	});
})