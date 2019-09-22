
class SelectionSort {

	static getNextMove(values, index) {
		
		let minIndex = index;
		let min = parseInt(values[index], 10);
		
		for (let i = index; i < values.length; i++) {

			let current = parseInt(values[i], 10);

			if (current < min) {
				minIndex = i;
				min = current;
			}
			
		}

		return minIndex;
		
	}

}
