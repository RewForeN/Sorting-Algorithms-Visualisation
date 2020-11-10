
class ListController {

	static elementWidth = 10;
	static list = [];

	static newList() {

		for (let i = 0; i < 100; i++) {
			list.push(Math.floor(Math.random() * 100) + 1);
		}

	}

	static generate(canvas, len) {

		let ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (list.length == 0) {
			this.newList();
		}

		ctx.fillStyle = "#70b8cc";

		for (let i = 0; i < len; i++) {
			ctx.fillRect(this.getElementPositionX(i), 0, this.elementWidth, this.getElementHeight(i));
		}

	}

	static getElementHeight(index) {

		return list[index] * 4 + 10;

	}

	static getElementPositionX(index) {

		return index * 20;

	}

}
