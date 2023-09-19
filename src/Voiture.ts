export class Voiture {
    private _couleur : string
    public etat : number
  
    constructor(maCouleur:string, monEtat : number) {
      this._couleur = maCouleur
      this.etat = monEtat
    }
    
    
    public get couleur() : string {
        return this._couleur; 
    }

    public set couleur(maCouleur : string) {
        this._couleur = maCouleur;
    }
    
    
    public crasher() : number{
      this.etat = this.etat - (this.etat*0.2)  
      return this.etat
    }
}