
/**
 * 
 */
class SeededRandom {

	constructor() {

		this.m_w_0 = 123456789;
		this.m_z_0 = 987654321;
		this.m_w = this.m_w_0;
		this.m_z = this.m_z_0;
		this.mask = 0xffffffff;

	}

	/**
	 * Sets the new seed of Random.
	 * 
	 * @param {number} key Value of the new seed.
	 */
	seed(key) {

		this.m_w_0 = (123456789 + key) & this.mask;
		this.m_z_0 = (987654321 - key) & this.mask;
		this.m_w = this.m_w_0;
		this.m_z = this.m_z_0;

	}

	/**
	 * Generates a seeded random number between 0 (inclusive) and 1.0 (exclusive).
	 * 
	 * @returns A seeded random number.
	 */
	random() {

		this.m_z = (36969 * (this.m_z & 65535) + (this.m_z >> 16)) & this.mask;
		this.m_w = (18000 * (this.m_w & 65535) + (this.m_w >> 16)) & this.mask;

		let result = ((this.m_z << 16) + (this.m_w & 65535)) >>> 0;
		result /= 4294967296;

		return result;

	}

	/**
	 * Reset to the inital state of the current seed.
	 */
	reset() {
		
		this.m_w = this.m_w_0;
		this.m_z = this.m_z_0;

	}

}