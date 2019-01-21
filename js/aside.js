var aside = document.getElementById('aside');
var aside_backdrop = document.getElementById('aside-backdrop');

function showAside(){
	aside.style.left = '0px';
	aside_backdrop.style.display = "block";
}

function hideAside(){
	aside.style.left = '-100%';
	aside_backdrop.style.display = 'none';
}
function mobileMenuShow() {
	var mpl = document.getElementById('mobile_partLink');
	var mp = document.getElementById('mobile_part');
	var num = 100;
	var num2 = 0;
	var interval = setInterval(function() {
		num -= 10;
		num2 += 10;
		if(num < 0) {
			clearInterval(interval);
		}
		else {
			mpl.style.left = num+ "%";
			mp.style.position = "relative";
			mp.style.left = "-" + num2 + "%";
		}
	}, 25);
}
function mobileMenuHide() {
	var mpl = document.getElementById('mobile_partLink');
	var mp = document.getElementById('mobile_part');
	var num = 100;
	var num2 = 0;
	var interval = setInterval(function() {
		num -= 10;
		num2 += 10;
		if(num2 > 100) {
			clearInterval(interval);
			mp.style.position = "inherit";
		}
		else {
			mpl.style.left = num2+ "%";
			mp.style.position = "relative";
			mp.style.left = num + "%";
		}
	}, 25);
}