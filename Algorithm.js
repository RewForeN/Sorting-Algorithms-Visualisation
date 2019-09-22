
let isSorting = false;
let index = 0;

let algorithms = [
	SelectionSort, BubbleSort, InsertionSort, 
	MergeSort, QuickSort, HeapSort, 
	CountingSort, RadixSort, BucketSort
]

let algorithm = algorithms[0];

function setAlgorithmById(id) {
	algorithm = algorithms[id];
}

function algReset() {
	isSorting = false;
	index = 0;
}

function algSort() {
	
	if (!isSorting) {
		return;
	}

	// Get values
	let values = getValues();

	// Get indices to swap
	let minIndex = algorithm.getNextMove(values, index);

	if (minIndex != index) {
		// Tell canvas to swap those inddices
		swap(index, minIndex);
	}

	// Schedual next iteration
	if (index < values.length) {
		index++;
		setTimeout(algSort, 1000);
	}
	
}
