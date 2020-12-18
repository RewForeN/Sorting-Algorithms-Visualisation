
class Selection {

	constructor() {

		this.index = 0;

	}

	/**
	 * A.
	 * 
	 * @param {array} list - The list for which to complete the next sorting step.
	 * @returns {boolean} - True if the list is completely sorted.
	 */
	next(list) {

		let min = this.index;

		for (let i = this.index + 1; i < list.getLength(); i++) {
			if (list.get(i) < list.get(min)) {
				min = i;
			}
		}

		if (min != this.index) {
			list.swap(this.index, min);
		}

		this.index++;

		return (this.index == list.getLength() - 1) ? true : false;

	}

	reset() {
		
		this.index = 0;

	}

}