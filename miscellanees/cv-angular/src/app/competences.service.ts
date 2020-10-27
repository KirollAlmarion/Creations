import { Injectable } from '@angular/core';
import { Competence } from './competence';
import { listeCompetences } from './listecompetences';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  recupereCompetence(indice: number): Competence{
    return listeCompetences[indice]
  }

  augmenteCompetence(competence: Competence, progres: number){
    competence.progression += progres;
  }

  constructor() { }
}
