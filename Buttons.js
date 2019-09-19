
var algButtons = document.getElementsByClassName('alg');

for (let i = 0; i < algButtons.length; i++) {
	algButtons[i].addEventListener("click", onAlgButtonClick);
}

function onAlgButtonClick(e) {
	let id = e.path[1].id;
	setAlgorithmById(id);
	console.log(e);
}