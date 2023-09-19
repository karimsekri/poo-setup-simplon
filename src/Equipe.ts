import { Joueur } from "./Joueur"

export class Equipe {
    private _joueurs : Joueur[]

    constructor(mesJoueurs : Joueur[]) {
        this._joueurs = mesJoueurs  ;
    }

    
    public get joueurs() : Joueur[] {
        return this._joueurs;
    }
    
    
    public set joueurs(mesJoueurs : Joueur[]) {
        this._joueurs = mesJoueurs;
    }
    

    /**
     * afficherNbreJoueur
     */
    public afficherNbreJoueur() : number {
       return this._joueurs.length; 
    }
}