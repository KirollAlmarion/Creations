import { Injectable } from '@angular/core';
import { Accomplissement } from './accomplissement';
import { listeAccomplissements } from './listeaccomplissements';

@Injectable({
  providedIn: 'root'
})
export class AccomplissementsService {
  etats = [false, false, false, false, false];

  recupereAccomplissement(indice: number): Accomplissement{
    return listeAccomplissements[indice]
  }

  definiEtat(){
    for (let i=0; i<5;i++){
      this.etats[i] = this.recupereAccomplissement(i).actif
    }
  }

  incomplet(): boolean {
    this.definiEtat();
    return this.etats.some(etat => etat === false);
  }

  constructor() { }

}
