var itemEl = require("./category.ejs");

var initItem = function  (imgUrl,des,star,ratingLink,ratingNum,price) {
	return itemEl({
		imageUrl: imgUrl,
		des:des,
		star:star,
		ratingLink:ratingLink,
		ratingNum:ratingNum,
		price:price
	})
}

module.exports = initItem;