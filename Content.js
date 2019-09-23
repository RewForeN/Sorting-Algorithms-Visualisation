
const defaultNumValues = 10;
const valueRange = 200;
const defaultAlgorithmId = 0;

const algorithms = [
	new SelectionSort(), new BubbleSort(), new InsertionSort(), 
	new	MergeSort(), new QuickSort(), new HeapSort(), 
	new CountingSort(), new RadixSort(), new BucketSort()
]

const tl = new TimelineMax();
const ul = document.getElementsByClassName('bars')[0];
const p_numValues = document.getElementsByClassName('numValues')[0];

let algorithm;
let isSorting;

let numValues;
let values = [];


function init() {

	isSorting = false;
	algorithm = algorithms[defaultAlgorithmId];
	numValues = defaultNumValues;
	generateValues();
	drawContent();

}

function generateValues() {
	values = [];
	for (let i = 0; i < numValues; i++) {
		let value = Math.floor(Math.random() * valueRange) + 1;
		values.push(value);
	}
}

function drawContent() {
	p_numValues.innerHTML = numValues;
	while (ul.firstChild) ul.removeChild(ul.firstChild);
	for (let i = 0; i < values.length; i++) {
		// Create elements
		let item = document.createElement('li');
		let span = document.createElement('div');
		let p = document.createElement('p');
		// Set height and value
		span.style.height = values[i] + "px";
		p.innerHTML = values[i];
		// Add items
		item.appendChild(span);
		item.appendChild(p);
		ul.appendChild(item);
	}
}

function setAlgorithmById(id) {
	algorithm = algorithms[id];
}

function reset() {
	init();
}

function add() {
	isSorting = false;
	numValues++;
	generateValues();
	drawContent();
}

function sub() {
	if (numValues == 1) return;
	isSorting = false;
	numValues--;
	generateValues();
	drawContent();
}

function sort() {
	if (isSorting) return;
	isSorting = true;
	algorithm.sort(values, swap, checking);
}

function swap(i, j) {
	let items = ul.children;
	let dist = items[j].offsetLeft - items[i].offsetLeft;
	tl.to(items[i], 0.2, { y: 40 });
	tl.to(items[j], 0.2, { y: 40 }, "-=0.2");
	tl.to(items[i], 0.5, { x: dist, y: 0 });
	tl.to(items[j], 0.5, { x: -dist, y: 0 }, "-=0.5");
	setTimeout(drawContent, 750);
}

function checking(i, yes) {
	let items = ul.children;
	let color;
	if (yes) color = "#753d8b";
	else color = "#b768d6"
	items[i].firstChild.style.background = color;
}


init();
