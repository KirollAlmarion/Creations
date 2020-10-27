import { Component, OnInit, Input } from '@angular/core';
import {HAUTEUR, LARGEUR} from '../dimensions';
import { Accomplissement } from '../accomplissement';
import {AccomplissementsService} from '../accomplissements.service';
import {CompetencesService} from '../competences.service';
import {PigmentsService} from '../pigments.service';

@Component({
  selector: 'app-accomplissement',
  templateUrl: './accomplissement.component.html',
  styleUrls: ['./accomplissement.component.css']
})
export class AccomplissementComponent implements OnInit {

  @Input() nomAccomplissement: number;
  accomplissement: Accomplissement;
  diametre = 0.12 * LARGEUR;
  police = 0.012 * HAUTEUR;

  constructor(public pigmentsService: PigmentsService, private accomplissementsService: AccomplissementsService, private competencesService: CompetencesService) { }

  definiAccomplissement(): void{
    this.accomplissement = this.accomplissementsService.recupereAccomplissement(this.nomAccomplissement); 
  }

  styleTexte(): string {
    return `font-size: ${this.police}px; opacity: ${this.accomplissement.actif ? 1 : 0}`;
  }

  stylePastille(): string {
    return `background-color: ${this.pigmentsService.couleurActive()}; font-size: ${this.police}px; height: ${this.diametre}px; width: ${this.diametre}px; opacity: ${this.accomplissement.actif ? 1 : 0.3}; cursor: ${this.accomplissement.actif ? "default" : "pointer"}`;
  }

  activeAccomplissement(): void{
    if (!this.accomplissement.actif){
      this.accomplissement.competencesLiees.map( competenceLiee => {
        let competence = this.competencesService.recupereCompetence(competenceLiee.nom);
        this.competencesService.augmenteCompetence(competence, competenceLiee.progression);
      });
      this.accomplissement.actif = true;
    }
  }

  ngOnInit(): void {
    this.definiAccomplissement();
  }

}
