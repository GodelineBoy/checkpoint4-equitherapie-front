export class Tarif {
    private _id: number;
    private _prix: number;
    private _description: string;

    constructor(id: number, prix: number, description: string) {
        this._id = id;
        this._prix = prix;
        this._description = description;
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
     * Getter prix
     * @return {number}
     */
	public get prix(): number {
		return this._prix;
	}

    /**
     * Setter prix
     * @param {number} value
     */
	public set prix(value: number) {
		this._prix = value;
	}
    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter description
     * @param {string} value
     */
  public set description(value: string) {
    this._description = value;
}
   
    


}