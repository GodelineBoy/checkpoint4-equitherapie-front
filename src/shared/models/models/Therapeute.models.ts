import { Photo } from "./Photo.model";

export class Therapeute {

private _id: number;
private _photo: Photo;
private _nom: string;
private _description: string;


constructor(id: number, photo: Photo, nom: string, description: string) {
    this._id = id;
    this._photo = photo;
    this._nom = nom;
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
     * Getter photo
     * @return {Photo}
     */
	public get photo(): Photo {
		return this._photo;
	}

        /**
     * Setter photo
     * @param {Photo} value
     */
	public set photo(value: Photo) {
		this._photo = value;
	}
    
     /**
     * Getter nom
     * @return {string}
     */
	public get nom(): string {
		return this._nom;
	}

    /**
     * Setter nom
     * @param {string} value
     */
	public set nom(value: string) {
		this._nom = value;
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