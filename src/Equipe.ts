import { Joueur } from "./Joueur"

export class Equipe {
    private _nomEquipe : string
    private _joueurs : Joueur[]

    constructor(monNomEquipe: string, mesJoueurs : Joueur[]) {
        this._joueurs = mesJoueurs  ;
        this._nomEquipe = monNomEquipe; 
    }

    
    public get joueurs() : Joueur[] {
        return this._joueurs;
    }    
    public set joueurs(mesJoueurs : Joueur[]) {
        this._joueurs = mesJoueurs;
    }
    
    
    public get nomEquipe() : string {
        return this._nomEquipe;
    }    
    public set nomEquipe(valeur : string) {
        this._nomEquipe = valeur;
    }
    

    /**
     * afficherNbreJoueur
     */
    public afficherNbreJoueur() : number {
       return this._joueurs.length; 
    }
}