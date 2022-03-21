export class ConfirmationModal {
    private _message: string;
  
    constructor(message: string) {
      this._message = message;
    }
    /**
     * Getter message
     * @return {string}
     */
    public get message(): string {
      return this._message;
    }
  
    /**
     * Setter message
     * @param {string} value
     */
    public set message(value: string) {
      this._message = value;
    }
  }
  