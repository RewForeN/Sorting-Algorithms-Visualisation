
let selectAlgorithm;
let sliderSpeed, sliderElements;
let btnDecSpeed, btnIncSpeed, btnDecElements, btnIncElements, btnSort, btnReset;
let lblSpeed, lblElements;
let canvas;

let algorithm = 0;
let speed = 50;
let elements = 50;

let algs = [
	new Selection(), new Bubble()
];


function setup() {

	selectAlgorithm = document.getElementById("selectAlgorithm");
	lblSpeed = document.getElementById("lblSpeed");
	btnDecSpeed = document.getElementById("btnDecSpeed");
	sliderSpeed = document.getElementById("sliderSpeed");
	btnIncSpeed = document.getElementById("btnIncSpeed");
	lblElements = document.getElementById("lblElements");
	btnDecElements = document.getElementById("btnDecElements");
	sliderElements = document.getElementById("sliderElements");
	btnIncElements = document.getElementById("btnIncElements");
	btnSort = document.getElementById("btnSort");
	btnReset = document.getElementById("btnReset");
	canvas = document.getElementById("ctx");

	selectAlgorithm.onchange = function() {
		algorithm = selectAlgorithm.value;
	}

	btnDecSpeed.onclick = function() {
		sliderSpeed.stepDown();
		sliderSpeed.onchange();
	}

	sliderSpeed.onchange = function() {
		speed = sliderSpeed.value;
		lblSpeed.innerHTML = speed;
	}

	btnIncSpeed.onclick = function() {
		sliderSpeed.stepUp();
		sliderSpeed.onchange();
	}

	btnDecElements.onclick = function() {
		sliderElements.stepDown();
		sliderElements.onchange();
	}

	sliderElements.onchange = function() {
		elements = sliderElements.value;
		lblElements.innerHTML = elements;
		ListController.generate(canvas, elements);
	}

	sliderElements.addEventListener("mousemove", function() {
		sliderElements.onchange();
	});

	btnIncElements.onclick = function() {
		sliderElements.stepUp();
		sliderElements.onchange();
	}

	btnSort.onclick = function() {
		sort();
	}

	btnReset.onclick = function() {
		reset();
	}
	
	canvas.width = 0.98 * innerWidth;
	canvas.height = 0.98 * innerHeight - document.getElementById("header").clientHeight - 10;

	ListController.newList();
	ListController.generate(canvas, elements);

}

function sort() {

	let sorted = false;
	algs[algorithm].init();

	while (!sorted) {
		algs[algorithm].next();
		ListController.render(canvas);
		sorted = ListController.isSorted();
	}

	console.log("Done");

}

function reset() {

	ListController.generate(canvas, elements, true);

}


window.onload = function() {
	setup();
}
