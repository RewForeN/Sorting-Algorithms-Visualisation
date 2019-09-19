
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
let values = []

function generateValues() {
	values = [];
	for (let i = 0; i < cw/40; i++) {
		values.push(Math.random() * ch * 0.8);
	}
}

function setAlgorithmById(id) {
	algorithm = algorithms[id];
	console.log(algorithm);
}

function sort() {
	//algorithm.sort(values)
	algorithm.getNextMove();
}

function reset() {
	
}