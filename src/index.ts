import {Voiture} from "./Voiture";
import { Conducteur } from "./Conducteur";
import { Joueur } from "./Joueur";
import { Equipe } from "./Equipe";
// class Pomme {
//     public name: string
//     private _color: string

//     constructor(
//         name: string,
//         color: string,
//     ) {
//       console.log('Initialisation de la pomme')
//       this.name = name
//       this._color = color
//     }   

//     private afficher(): void{
//       console.log("ma Pomme est de la varité" , this.name, "de couleur",this._color);
//     }

//     public get couleur() : string {
//       return this._color;
//     }

//     public set couleur(maCouleur : string){
//       this._color = maCouleur;
//     }

//     public display():void{
//       this.afficher();
//     }

//     static donnerHeure() : number
//     {
//       return Date.now();
//     }
// }

// const maPomme = new Pomme('Granny Smith', 'verte');
// maPomme.display();

// maPomme.couleur="blue";
// // console.log(maPomme.couleur);
// // maPomme.display();

// const maPomme2 = new Pomme("pink lady", "rose");
// maPomme2.display();
// maPomme2.couleur = "jaune";
// maPomme2.display(); 

// const methodeStatic = Pomme.donnerHeure();
// console.log(methodeStatic);

// const maVoiturePetite = new Voiture("rouge",22);
// const maVoitureNeuve = new Voiture("noir", 100);
// const  mesVoitures = [maVoiturePetite,maVoitureNeuve] as Voiture[];

// // maVoitureNeuve.crasher();
// // console.log("Etat Voiture neuve ", maVoitureNeuve.etat);
// // console.log("Etat Voiture petite ", maVoiturePetite.etat);

// // const moi = new Conducteur("sekri","Karim",);
// // moi.direBonjour();
// const moi = new Conducteur("sekri","Karim",mesVoitures);
// // moi.seCrasher(0);
// // console.log(maVoiturePetite.etat);
// // console.log(maVoitureNeuve.etat);
// const colors = moi.getColors()
// console.log(colors);


// moi.voitures.forEach(elementVoiture => {
//   console.log(elementVoiture.couleur)
// });

const joueur1 = new Joueur("karim","sekri",42);
const joueur2 = new Joueur("thomas","laforge",33);
const joueur3 = new Joueur("Bruno","dupond",20);
const joueur4 = new Joueur("fabrice","lecoq",60);


const equipe1 = new Equipe([joueur1,joueur2]);
const equipe2 = new Equipe([joueur3,joueur4]);

console.log(equipe1.afficherNbreJoueur());
