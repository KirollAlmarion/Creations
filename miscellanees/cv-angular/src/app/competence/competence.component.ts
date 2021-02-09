import { Component, OnInit, Input } from '@angular/core';
import {HAUTEUR, LARGEUR} from '../dimensions';
import { Competence } from '../competence';
import {CompetencesService} from '../competences.service';
import {PigmentsService} from '../pigments.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  @Input() nomCompetence: number;
  competence: Competence;
  tailleH4 = 0.015 * HAUTEUR;
  epaisseur = 0.005 * HAUTEUR;
  longueur = .3 * LARGEUR;
  marge = .01 *HAUTEUR;
  styleTotal = `height: ${this.epaisseur}px; width: ${this.longueur}px`;

  constructor(public pigmentsService: PigmentsService, private competencesService: CompetencesService) { }

  definiCompetence(): void{
    this.competence = this.competencesService.recupereCompetence(this.nomCompetence);
  }
  styleTitre(): string {
    return `font-size: ${this.tailleH4}px; opacity: ${this.competence.progression ? 1 : 0}`
  }
  
  styleRemplissage(): string {
    return `width: ${this.longueur * this.competence.progression / 100}px; background-color: ${this.pigmentsService.couleurActive()}; height: ${this.epaisseur}px`;
  }

  ngOnInit(): void {
    this.definiCompetence();
  }

}
