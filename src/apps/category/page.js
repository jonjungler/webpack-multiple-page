var categoryEl = require('./category.ejs');
var header = require("../../components/header/page.js");
var banner = require("../../components/banner/page.js");
var footer = require("../../components/footer/page.js");
var categoryItem = require("../../components/categoryItem/page.js");



var itemList = [
	initItem("2_1.png"),
	initItem("2_2.png"),
	initItem("2_3.png"),
	initItem("2_4.png"),
	initItem("2_5.png"),
	initItem("2_6.png"),
	initItem("2_7.png"),
	initItem("2_7.png")
]
var itemListBottom = [
	initItem("2_12.png"),
	initItem("2_12.png"),
	initItem("2_13.png"),
	initItem("2_14.png"),
	initItem("2_15.png"),
	initItem("2_16.png"),
	initItem("2_17.png"),
	initItem("2_18.png")
]

var category = categoryEl({
	headerDiv:header,
	bannerDiv:banner(),
	footerDiv:footer(),
	topList:itemList,
	bottomList:itemListBottom
})

function initItem(img) {
	return categoryItem(require('../../../assets/images/'+img),
				"sony索尼DSC-TX66 数码相机 粉色（1820万像素/3.3英寸",
				require("../../../assets/images/2_232_29.png"),
				"",
				"0条",
				"￥988.00");
}

module.exports = category;