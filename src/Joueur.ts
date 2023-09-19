export class Joueur {
    private _prenom : string
    private _nom : string
    private _age : number

    constructor(monPrenom: string, monNom : string, monAge :number) {
        this._prenom = monPrenom;
        this._nom = monNom;
        this._age = monAge;
    }

    
    public get prenom() : string {
        return this._prenom;
    }

    
    public set prenom(monPrenom : string) {
        this._prenom = monPrenom;
    }
    
    public get nom () : string {
        return this._nom;
    }

    
    public set nom(monNom : string) {
        this._nom = monNom;
    }
    public get age() : number {
        return this._age;
    }

    
    public set age(monAge : number) {
        this._age = monAge;
    }
}