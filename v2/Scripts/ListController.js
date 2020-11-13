
class ListController {

	static list = [];
	
	static _listCache = [];
	static _elementAttributes = {
		width: 0,
		gap: 0,
		offset: 0
	}

	static newList() {

		this._listCache = [];

		for (let i = 0; i < 100; i++) {
			this._listCache.push(Math.floor(Math.random() * 100) + 1);
		}

	}

	static generate(canvas, n) {

		if (n == this.list.length || this._listCache.length == 0)
			return;

		this._buildListFromCache(n);
		this._calcListAttributes(n, canvas.width);

		let ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#67468f";

		for (let i = 0; i < n; i++) {
			ctx.fillRect(this._getElementPositionX(i, n, canvas.width), 0, this._elementAttributes.width, this._getElementHeight(i));
		}

	}

	static _buildListFromCache(n) {

		this.list = [];

		for (let i = 0; i < n; i++) {
			this.list.push(this._listCache[i]);
		}

	}

	static _calcListAttributes(n, c) {

		let r = c / n;
		this._elementAttributes.width = 0.63 * r;
		this._elementAttributes.gap = 0.27 * r;
		this._elementAttributes.offset = 0.9 * r;

	}

	/// i: index, n: number of elements, c: canvas width
	static _getElementPositionX(i, n, c) {
		
		return Math.floor(((2*i - n + 1) * this._elementAttributes.offset - this._elementAttributes.width + c) / 2);
		
	}
	
	static _getElementHeight(i) {

		return this.list[i] * 4 + 10;

	}

}
