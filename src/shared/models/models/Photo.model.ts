export class Photo {

    private _id: number;
    private _src: string;

    constructor(id: number, src: string) {
        this._id = id;
        this._src = src;
    }

     /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}


    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}
    /**
     * Getter src
     * @return {string}
     */
	public get src(): string {
		return this._src;
	}

    /**
     * Setter src
     * @param {string} value
     */
	public set src(value: string) {
		this._src = value;
	}
}