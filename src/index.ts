import {Voiture} from "./Voiture";
import { Conducteur } from "./Conducteur";
import { Joueur } from "./Joueur";
import { Equipe } from "./Equipe";
import { Match } from "./Match";
import {Tournoi} from "./Tournoi4Equipes";
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
const joueur5 = new Joueur("tiphaine","blouse",50);
const joueur6 = new Joueur("alex","lebleu",40);
const joueur7 = new Joueur("marie","lerouge",80);
const joueur8 = new Joueur("chris","lenoir",54);


const equipe1 = new Equipe("équipe1",[joueur1,joueur2]);
const equipe2 = new Equipe("équipe2",[joueur3,joueur4]);
const equipe3 = new Equipe("équipe3",[joueur5,joueur6]);
const equipe4 = new Equipe("équipe4",[joueur7,joueur8]);

//console.log(equipe1.afficherNbreJoueur());


//1 - Créer un match de basket entre deux équipes de deux joueurs chacune
// const match1 = new Match(equipe1,equipe2);
// console.log("Score Initial",match1.scoreDuMatch);
// match1.simulationScore();
// console.log("Score Final",match1.scoreDuMatch);
// console.log("l'équipe",match1.AGagneLeMatch().nomEquipe,"a gagnée");
// console.log("les joueurs de l'quipe gagnante sont : ", match1.AGagneLeMatch().joueurs)


//2 - Créer un tournoi avec 4 équipes
const tournoi = new Tournoi(equipe1,equipe2,equipe3,equipe4) as Tournoi;
tournoi.simulerTournoi();
tournoi.afficherResultat();
