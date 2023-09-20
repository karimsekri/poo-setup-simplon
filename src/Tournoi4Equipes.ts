import {Equipe} from './Equipe'
import {Match} from './Match'

export class Tournoi{
    private _equipe1 : Equipe
    private _equipe2 : Equipe
    private _equipe3 : Equipe
    private _equipe4 : Equipe

    public Place1 : Equipe
    public Place2: Equipe
    public Place3 : Equipe
    public Place4 : Equipe

    constructor(monEquipe1 : Equipe, monEquipe2 : Equipe, monEquipe3 : Equipe, monEquipe4 : Equipe){
        this._equipe1 = monEquipe1;
        this._equipe2 = monEquipe2;
        this._equipe3 = monEquipe3;
        this._equipe4 = monEquipe4;
        
    
    }   
        
    public get equipe1() : Equipe {
        return this._equipe1;
    }    
    public set equipe1(v : Equipe) {
        this._equipe1 = v;
    }    

    public get equipe2() : Equipe {
        return this._equipe2;
    }    
    public set equipe2(v : Equipe) {
        this._equipe2 = v;
    }

    public get equipe3() : Equipe {
        return this._equipe3;
    }    
    public set equipe3(v : Equipe) {
        this._equipe3 = v;
    }

    public get equipe4() : Equipe {
        return this._equipe4;
    }    
    public set equipe4(v : Equipe) {
        this._equipe4 = v;
    }


    public simulerTournoi() {
        const match1 = new Match(this._equipe1,this._equipe2);
        const match2 = new Match(this._equipe3,this._equipe4);
        match1.simulationScore();
        match2.simulationScore();

        const equipeGagnantMatch1 = match1.AGagneLeMatch();
        const equipePerdantMatch1 = match1.APerduLeMatch();

        const equipeGagnantMatch2 = match2.AGagneLeMatch();
        const equipePerdantMatch2 = match2.APerduLeMatch();
        
        const matchGrandeFinal = new Match(equipeGagnantMatch1,equipeGagnantMatch2);
        matchGrandeFinal.simulationScore();
        this.Place1 = matchGrandeFinal.AGagneLeMatch();
        this.Place2 = matchGrandeFinal.APerduLeMatch();

        const matchPetiteFinal = new Match(equipePerdantMatch1,equipePerdantMatch2);
        matchPetiteFinal.simulationScore();
        this.Place3 = matchPetiteFinal.AGagneLeMatch();
        this.Place4 = matchPetiteFinal.APerduLeMatch();

    }        
    
    public afficherResultat() {
        console.log("1ere Place ", this.Place1.nomEquipe, "2eme Place",this.Place2.nomEquipe);
        console.log("3eme Place",this.Place3.nomEquipe, "Dernière Place",this.Place4.nomEquipe);
    }
}