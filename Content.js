
let numValues = 10;

let ul = document.getElementsByClassName('bars')[0];
let p_numValues = document.getElementsByClassName('numValues')[0];

function init() {
	algReset();
	p_numValues.innerHTML = numValues;
	// Remove all elements in ul
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
	generateValues();
}

function generateValues() {
	for (let i = 0; i < numValues; i++) {
		let value = Math.floor(Math.random() * 200);
		createBar(value);
	}
}

function createBar(value) {
	// Create elements
	let item = document.createElement('li');
	let span = document.createElement('div');
	let p = document.createElement('p');
	// Set valuesitem.id = value;
	item.id = value;
	span.style.height = value + "px";
	p.innerHTML = value;
	// Add items
	item.appendChild(span);
	item.appendChild(p);
	ul.appendChild(item);
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

function getValues() {
	let items = ul.children;
	let vals = [];
	for (let i = 0; i < items.length; i++) {
		vals.push(items[i].id);
	}
	return vals;
}

function sort() {
	if (isSorting){
		return;
	}
	isSorting = true;
	algSort();
}

function swap(i, j) {
	let items = ul.children;
	let temp = items[i].id;
	items[i].id = items[j].id;
	items[j].id = temp;
	items[i].firstChild.style.height = items[i].id + "px";
	items[j].firstChild.style.height = items[j].id + "px";
	items[i].childNodes[1].innerHTML = items[i].id;
	items[j].childNodes[1].innerHTML = items[j].id;
}

init();
//window.onresize = init;