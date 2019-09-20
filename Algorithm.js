
class Value {

	constructor(val) {
		this.val = val;
	}

}

// let algorithms = [
// 	new SelectionSort(), new BubbleSort(), new InsertionSort(), 
// 	new MergeSort(), new QuickSort(), new HeapSort(), 
// 	new CountingSort(), new RadixSort(), new BucketSort()
// ]

let algorithms = [
	SelectionSort, BubbleSort, InsertionSort, 
	MergeSort, QuickSort, HeapSort, 
	CountingSort, RadixSort, BucketSort
]

let algorithm = algorithms[0];

function setAlgorithmById(id) {
	algorithm = algorithms[id];
	console.log(algorithm);
}

