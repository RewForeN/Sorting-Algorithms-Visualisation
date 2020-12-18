
let selectAlgorithm,
	sliderSpeed, sliderElements,
	btnDecSpeed, btnIncSpeed, btnDecElements, btnIncElements, btnSort, btnReset,
	lblSpeed, lblElements,
	canvas;

let speed = 50;
let numElements = 50;
let algorithm = 0;
let isSorting = false;

let algs = [
	new Selection(), new Bubble()
];

let renderer;
let list;


/**
 * Tells the current algorithm to step until the list is sorted.
 */
async function sort() {

	btnSort.disabled = true;

	isSorting = true;
	let isSorted = false;

	while (!isSorted && isSorting) {
		isSorted = algs[algorithm].next(list);
		renderer.render(list);
		await sleep(100);
	}

	isSorting = false;
	
}

/**
 * Resets the state of the app.
 */
function reset() {

	isSorting = false;
	
	algs[algorithm].reset();
	list.reset();
	renderer.render(list);

}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


// When the window loads setup 
window.onload = function() {
	setup();
	renderer.render(list);
}
