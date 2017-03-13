function jjAddFavorite (jUrl,jTitle) {
	jUrl = encodeURI(jUrl)
	try {
		window.external.addFavorite(jUrl,jTitle);
	} catch(e) {
		// console.log(e);
		try {
			window.sidebar.addPanel(jTitle,jUrl,"")
		} catch(e) {
			// console.log(e);
			alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
		}
	}
}

function addFavorite() {
	var url = window.location;
	var title = document.title;
	jjAddFavorite(url,title);
}

function  login () {
	alert("登录正在完善!");
}

function signup() {
	alert("注册正在完善！");
}

function initToatl(){
	window.login = login;
	window.login = signup;
	window.addFavorite = addFavorite;
}

module.exports = initToatl();