var indec = document.getElementById('down-arrow');
var position = 0;
window.onscroll = function () {
	position = window.pageYOffset;
	// console.log(window.pageYOffset);
	if(position >= 100) {
		indec.style.top = "calc(100vh - 30px)";
		indec.style.visibility = "hidden";
	}
	else {
		indec.style.top = "calc(100vh - 70px)";
		indec.style.visibility = "visible";
	}
}
function indecDown() {
	window.scrollTo(0, 400);
}
function Scroll(id, index){
	var el_pos = document.getElementById(id).offsetTop;
	var interval;

	if (position < el_pos) {
		interval = setInterval(function(){
			position+=10;
			if (position >= el_pos + 40) {
				clearInterval(interval);
			}
			else {
				window.scrollTo(0, position);
			}
		}, 15);
	}
	else {
		interval = setInterval(function(){
			position-=10;
			if (position <= el_pos + 40) {
				clearInterval(interval);
			}
			else {
				window.scrollTo(0, position);
			}
		}, 15);
	}
}