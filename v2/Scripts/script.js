
let selectAlgorithm;
let sliderSpeed, sliderElements;
let btnDecSpeed, btnIncSpeed, btnDecElements, btnIncElements, btnSort, btnReset;
let lblSpeed, lblElements;

let algorithm = 0;
let speed = 50;
let elements = 50;


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
	}

	btnIncElements.onclick = function() {
		sliderElements.stepUp();
		sliderElements.onchange();
	}

	btnSort.onclick = function() {

	}

	btnReset.onclick = function() {

	}

}


window.onload = function() {
	setup();
}
