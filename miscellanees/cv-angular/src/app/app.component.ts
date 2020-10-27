import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {HAUTEUR, LARGEUR} from './dimensions';
import {COULEURS} from './style';
import {ANALYSE, PROTOCOLE, HTML, JS, REACT, ANGULAR, MONGO} from './listecompetences';
import {DEVELOPPEUR, PHARMACIEN, DOCTORANT, DORANCO, DOCTORAT} from './listeaccomplissements';
import {listeRenseignements} from './listerenseignements';
import {AccomplissementsService} from './accomplissements.service';
import {PigmentsService} from "./pigments.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tailleH1 = 0.025 * HAUTEUR;
  tailleH2 = 0.018 * HAUTEUR;
  couleurs = COULEURS;
  cote = LARGEUR / 10;
  
  styleMenu(): string {
    return `width: ${3.5 * this.cote}px; height: ${2 * this.cote}px`
  }

  constructor(private titleService: Title, private pigmentsService: PigmentsService, private accomplissementsService: AccomplissementsService) {}

  styleH2(): string {
    return `color: ${this.pigmentsService.couleurActive()}; font-size: ${this.tailleH2}px`
  }

  rotation(): string{
    return `rotateY(${this.accomplissementsService.incomplet()? 0.5 : 0}turn)`;
  }

  aujourdhui = new Date();
  anniversaire = new Date(1980, 5, 28);
  duree: number = this.aujourdhui.getTime() - this.anniversaire.getTime();
  age: number = Math.floor(this.duree / (1000*60*60*24*365.25));

  analyse = ANALYSE;
  protocole = PROTOCOLE;
  html = HTML;
  js = JS;
  react = REACT;
  angular = ANGULAR;
  mongo = MONGO;
  developpeur = DEVELOPPEUR;
  pharmacien = PHARMACIEN;
  doctorant = DOCTORANT;
  doranco = DORANCO;
  doctorat = DOCTORAT;
  tousLesRenseignements = listeRenseignements;

  ngOnInit(): void {
    this.titleService.setTitle("Curriculum vitae");
  }

}