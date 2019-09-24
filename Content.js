
const defaultNumValues = 10;
const valueRange = 200;
const defaultAlgorithmId = 0;
const anim_time = 0.5;

const algorithms = [
	new SelectionSort(), new BubbleSort(), new InsertionSort(), 
	new	MergeSort(), new QuickSort(), new HeapSort(), 
	new CountingSort(), new RadixSort(), new BucketSort()
]

const color = {
	normal: "#b768d6",
	check: "#753d8b",
}

const tl = new TimelineMax();
const ul = document.getElementsByClassName('bars')[0];
const p_numValues = document.getElementsByClassName('numValues')[0];
const p_numComparisons = document.getElementsByClassName('numComparisons')[0];
const p_numSwaps = document.getElementsByClassName('numSwaps')[0];

let algorithm;
let isSorting;

let numValues;
let numComparisons;
let numSwaps;
let values = [];


function init() {
	isSorting = false;
	algorithm = algorithms[defaultAlgorithmId];
	numValues = defaultNumValues;
	numComparisons = 0;
	numSwaps = 0;
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
	p_numComparisons.innerHTML = numComparisons;
	p_numSwaps.innerHTML = numSwaps;
	// Remove all old bars
	while (ul.firstChild) ul.removeChild(ul.firstChild);
	// Add new bars
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
	isSorting = false;
	numComparisons = 0;
	numSwaps = 0;
	generateValues();
	drawContent();
}

function softReset() {
	isSorting = false;
	numComparisons = 0;
	numSwaps = 0;
}

function add() {
	numValues++;
	reset();
}

function sub() {
	if (numValues == 1) return;
	numValues--;
	reset();
}

function sort() {
	if (isSorting) return;
	isSorting = true;
	algorithm.sort();
}

function swap(i, j) {
	let items = ul.children;
	let dist = items[j].offsetLeft - items[i].offsetLeft;
	tl.to(items[i], anim_time*0.3, { y: 40 });
	tl.to(items[j], anim_time*0.3, { y: 40 }, "-=" + anim_time*0.3);
	tl.to(items[i], anim_time*0.7, { x: dist, y: 0 });
	tl.to(items[j], anim_time*0.7, { x: -dist, y: 0 }, "-=" + anim_time*0.7);
}

function setColor(i, col) {
	let items = ul.children;
	items[i].firstChild.style.background = col;
}

function plusComparison() {
	numComparisons++;
	p_numComparisons.innerHTML = numComparisons;
}

function plusSwap() {
	numSwaps++;
	p_numSwaps.innerHTML = numSwaps;
}


init();
