export default class Quote {
    private _showDescription: boolean;
    public get showDescription(): boolean {
        return this._showDescription;
    }
    public set showDescription(value: boolean) {
        this._showDescription = value;
    }
    constructor(public id: number, public name: string, public description: string, public completeDate: Date, public register: string) {
        this.showDescription = false
    }
}