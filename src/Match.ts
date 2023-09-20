import { Equipe } from "./Equipe";

export class Match {
    private _equipe1 : Equipe
    private _equipe2 : Equipe
    private _scoreDuMatch : number[]
    

    constructor(monEquipe1:Equipe, monEquipe2:Equipe, monscoreDuMatch : number[] = [0,0]) {
        this._equipe1 = monEquipe1;
        this._equipe2 = monEquipe2;
        this._scoreDuMatch = monscoreDuMatch;
     
    }

    
    public get equipe1() : Equipe {
        return this._equipe1
    }    
    public set equipe1(monEquipe1 : Equipe) {
        this._equipe1 = monEquipe1;
    }

    public get equipe2() : Equipe {
        return this._equipe2
    }    
    public set equipe2(monEquipe2 : Equipe) {
        this._equipe2 = monEquipe2;
    }

    
    public get scoreDuMatch() : number[]{
        return this._scoreDuMatch;
    }    
    public set scoreDuMatch(monScore : number[]) {
        this._scoreDuMatch = monScore;
    }
    
    /**
     * simulation
     */
    public simulationScore() {
        while (this.scoreDuMatch[0] < 20 && this.scoreDuMatch[1] < 20 ) {
           const indexEquipe =  Math.floor(Math.random() * 2);
           this.scoreDuMatch[indexEquipe] +=  Math.floor(Math.random() * 3) + 1 ;
        }
    }
   
    public AGagneLeMatch() : Equipe {
        if (this._scoreDuMatch[1]>this._scoreDuMatch[0]) {
            return this._equipe2; 
        }
        else{
            return this._equipe1;
        }
        
    }

    public APerduLeMatch() : Equipe {
        if (this._scoreDuMatch[1]<this._scoreDuMatch[0]) {
            return this._equipe2; 
        }
        else{
            return this._equipe1;
        }
        
    }


    
}