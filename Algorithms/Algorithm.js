
class Algorithm {

	constructor() { }

	async swap(values, i, j) {
		let temp = values[i];
		values[i] = values[j];
		values[j] = temp;
		swap(i, j);
		await this.sleep(anim_time*0.9*1000);
		drawContent();
		await this.sleep(anim_time*0.1*1000);
	}

	sleep(msec) {
		return new Promise(resolve => setTimeout(resolve, msec));
	}

}