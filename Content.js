
let numValues = 10;

let ul = document.getElementsByClassName('bars')[0];
let p_numValues = document.getElementsByClassName('numValues')[0];

function init() {
	p_numValues.innerHTML = numValues;
	// Remove all elements in ul
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
	generateValues();
}

function generateValues() {
	for (let i = 0; i < numValues; i++) {
		let value = Math.floor(Math.random() * 100);
		createBar(value);
	}
}

function createBar(value) {
	let item = document.createElement('li');
	let span = document.createElement('span');
	span.setAttribute('style', 'height: ');
	span.innerHTML = value;
	item.appendChild(span);
	ul.appendChild(item);
}

function sort() {

}

function reset() {
	setAlgorithmById(0);
	numValues = 10;
	init();
}

function sub() {
	if(numValues == 1) {
		return;
	}
	numValues--;
	init();
}

function add() {
	numValues++;
	init();
}

init();
//window.onresize = init;