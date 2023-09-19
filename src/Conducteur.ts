import { Voiture } from "./Voiture"

export class Conducteur {
    public nom :string
    public prenom : string
    public voitures : Voiture[]
  
  
    constructor(monNom: string, monPrenom : string, mesVoitures : Voiture[]) {
      this.nom = monNom
      this.prenom = monPrenom
      this.voitures = mesVoitures
    }
  
    public direBonjour() {
      console.log("Bonjour, je m'appelle", this.nom,this.prenom)
    }
  
    public seCrasher(index:number) {
      this.voitures[index].crasher()
    }

    public getColors(){
        return this.voitures.map(v => v.couleur)
    }
  }