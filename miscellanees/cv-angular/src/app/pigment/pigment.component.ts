import { Component, OnInit, Input } from '@angular/core';
import {PigmentsService} from "../pigments.service";
import {LARGEUR} from '../dimensions';

@Component({
  selector: 'app-pigment',
  templateUrl: './pigment.component.html',
  styleUrls: ['./pigment.component.css']
})
export class PigmentComponent implements OnInit {
  @Input() couleur: string;
  cote = LARGEUR / 10;

  constructor(private pigmentsService: PigmentsService) { }

  stylePigment(): string {
    return `background-color: ${this.couleur}; opacity: ${this.couleur == this.pigmentsService.couleurActive() ? 1 : 0.5}; cursor: ${this.couleur == this.pigmentsService.couleurActive() ? "default" : "pointer"}; width: ${this.cote}px; height: ${this.cote}px`
  }

  changeCouleur(): void{
    this.pigmentsService.definiCouleurActive(this.couleur)
  }

  ngOnInit(): void {
  }

}
