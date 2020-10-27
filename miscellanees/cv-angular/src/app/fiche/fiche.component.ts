import { Component, OnInit, Input } from '@angular/core';
import { HAUTEUR } from '../dimensions';
import {PigmentsService} from '../pigments.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  @Input() fonce: boolean;
  @Input() elements: string[];
  @Input() competence: boolean;
  margeSup = 0.03 * HAUTEUR;
  tailleH3 = 0.018 * HAUTEUR;
  police = 0.012 * HAUTEUR;

  styleTitre(){
    return `font-size: ${this.tailleH3}px; color: ${this.fonce ? "white" : this.pigmentsService.couleurActive()}`
  }

  styleFiche(){
    return `background-color: ${this.fonce ? this.pigmentsService.couleurActive() : "white"}`
  }

  constructor(public pigmentsService: PigmentsService) { }

  ngOnInit(): void {
  }

}
