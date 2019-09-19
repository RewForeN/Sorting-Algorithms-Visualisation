
let algButtons = document.getElementsByClassName('alg');
let ctrlButtons = document.getElementsByClassName('ctrl');

for (let i = 0; i < algButtons.length; i++) {
	algButtons[i].addEventListener("click", onAlgButtonClick);
}

for (let i = 0; i < ctrlButtons.length; i++) {
	ctrlButtons[i].addEventListener("click", onCtrlButtonClick);
}

function onAlgButtonClick(e) {
	setAlgorithmById(e.path[1].id);
}

function onCtrlButtonClick(e) {
	if (e.path[1].id == 0) {
		sort();
	}
	else {
		reset();
	}
}