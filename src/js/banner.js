const banner  = function(){

	// ready
	// $(document).ready(function () {
	// 	var banner = new bannerObj($(".menu .banner-list"),".banner-item");
	// 	var bannerController = new bannerControl($(".menu .banner-control"),".control-item",banner.itemNum,banner.selectNum);
	// 	banner.selectChange = bannerController.checkNum;
	// 	$(".content-item .banner-ul").each(
	// 			function () {
	// 				var $bannerUl = $(this);
	// 				var contentBanner = new bannerObj($bannerUl,".banner-item",true);
	// 				var $bannerController = $bannerUl.next(".banner-controller").eq(0);
	// 				var contentC = new bannerControl($bannerController,".control-item",contentBanner.itemNum,contentBanner.selectNum);
	// 				contentBanner.selectChange = contentC.checkNum;
	// 			})
	// })

	// banner初始化
	this.bannerObj = function bannerObj ($banner,itemDes,notAuto,time,selectChange) {
		if (!$banner || !itemDes) {
			return;
		}
		var millisec = time || 3000;
		var $item = $banner.children(itemDes);
		this.itemNum = $item.length;
		var currentIndex = 0;
		var itemW = $item.width();
		var itemH = $item.height();
		$banner.width(itemW*(notAuto ? $item.length : $item.length+1));
		this.selectChange = selectChange;
		var bannerObjContext = this;
		var changeListener = function  (changeNum) {
			if (bannerObjContext.selectChange) {
				bannerObjContext.selectChange(changeNum);
			}
		}
		var intervalId
		if (!notAuto) {
			var $firstItem = $item.eq(0).clone(true);
			$banner.append($firstItem);
			intervalId = initInterval($banner,$item,millisec,changeListener,currentIndex);
		}
		this.selectNum = function (index) {
			if (intervalId) {
				window.clearInterval(intervalId);
			}
			$banner.finish();
			if (index == currentIndex) {
				return;
			}
			$banner.animate(
				{	
					left:-(index)*itemW
				},
				500,'linear',
				function () {
					currentIndex = index;
				}
			);
			if (!notAuto) {
				intervalId = initInterval($banner,$item,millisec,changeListener,currentIndex);
			}
		}	
		return this;
	}

	function initInterval ($banner,$item,millisec,selectChange,currentIndex) {
		return window.setInterval(function(){
			var nextIndex = currentIndex == $item.length-1?0:$item.length-1;
			$banner.animate(
				{
					left:-(currentIndex+1)*($item.width())
				},
				1000,'linear',
				function () {
					if (currentIndex==$item.length-1) {
						$banner.css({
							left:0
						});
						currentIndex = 0;
					}else {
						currentIndex++;
					}
					if (selectChange) {
						selectChange(currentIndex);
					}
				}
			)
		},millisec);
	}

	this.bannerControl =function bannerControl ($bannerController,itemDes,num,selectCallBack) {
		var itemNum = $bannerController.children(itemDes).length;
		var $item = $bannerController.children(itemDes);
		var checkIndex = 0;
		while (itemNum<num) {
			var itemClone = $item.clone();
			$bannerController.append(itemClone);
			itemNum++;
		}
		$item = $bannerController.children(itemDes);
		$item.each(function (index) {
			var $this = $(this);
			$this.on('click',function  (event) {
				if (selectCallBack) {
					selectCallBack($(this).index());
				}
				$bannerController.children(".control-checked").each(function () {
					$(this).removeClass("control-checked");
				})
				$(this).addClass("control-checked");
				return false;
			});
		});
		this.checkNum = function (checkIndex) {
			var checkedItem = $item.eq(checkIndex)
			$bannerController.children(".control-checked").each(function () {
				$(this).removeClass("control-checked");
			})
			checkedItem.addClass("control-checked");
		}
		this.checkNum(checkIndex);
		return this;
	}

	return this;
}

module.exports = new banner();

