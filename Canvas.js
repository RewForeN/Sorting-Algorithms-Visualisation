
let cw; // Canvas width
let ch; // Canvas height

var canvas = document.getElementById('canvas');
var cc = canvas.getContext('2d'); // Canvas context

function init() {
	cw = window.innerWidth;
	ch = window.innerHeight * 0.6;
	canvas.width = cw;
	canvas.height = ch;
}



function createBar(total, cur, h) {
	
}


init();
window.onresize = init;