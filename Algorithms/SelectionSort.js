
class SelectionSort {

	constructor() { }

	async sort() {

		for (let i = 0; i < values.length - 1; i++) {

			let minIndex = i;
			let minVal = parseInt(values[i], 10);

			for (let j = i; j < values.length; j++) {

				if (!isSorting) return;

				checking(j, true);

				let currentVal = parseInt(values[j], 10);
				if (currentVal < minVal) {
					minIndex = j;
					minVal = currentVal;
				}

				await this.sleep(50);

				checking(j, false);

			}

			if (i != minIndex) {
				this.swap(values, i, minIndex);
				swap(i, minIndex);
				await this.sleep(800);
			}

		}

	}

	swap(values, i, j) {
		let temp = values[i];
		values[i] = values[j];
		values[j] = temp;
	}

	sleep(msec) {
		return new Promise(resolve => setTimeout(resolve, msec));
	}

}
