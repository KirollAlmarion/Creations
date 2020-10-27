import { Component, OnInit, Input } from '@angular/core';
import { HAUTEUR } from '../dimensions';
import {PigmentsService} from '../pigments.service';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent implements OnInit {

  @Input() titre: string;
  @Input() elements: number[];
  @Input() competence: boolean;
  margeSup = 0.025 * HAUTEUR;
  tailleH3 = 0.018 * HAUTEUR;

  constructor(public pigmentsService: PigmentsService) { }

  styleTitre(): string {
    return `font-size: ${this.tailleH3}px; color: ${this.pigmentsService.couleurActive()}; border-bottom-color: ${this.pigmentsService.couleurActive()}`
  }

  ngOnInit(): void {
  }

}
