
class Selection {

	static nextIndex = 0;

	static next() {

		let list = ListController.getList();
		let min = this.nextIndex;

		for (let i = this.nextIndex + 1; i < list.length; i++) {
			if (list[i] < list[min]) {
				min = i;
			}
		}
		
		if (min != 0) {
			ListController.swap(this.nextIndex, min);
		}

		this.nextIndex++;

	}

	init() {
		Selection.nextIndex = 0;
	}

	next() {
		Selection.next();
	}

}