import { Component, OnInit } from '@angular/core';
import {PigmentsService} from '../pigments.service';

@Component({
  selector: 'app-telechargement',
  templateUrl: './telechargement.component.html',
  styleUrls: ['./telechargement.component.css']
})
export class TelechargementComponent implements OnInit {
  dy = 0;
  //fichier = `../../assets/cv-${this.pigmentsService.couleurActive()}.pdf`;

  fichier(): string {
    return `../../assets/cv-${this.pigmentsService.couleurActive()}.pdf`
  }

  translation(): string {
    return `translate(0, ${this.dy}%)`
  }
  
  descend(){
    this.dy = 25;
    
  }

  monte(){
    this.dy = 0;
  }

  constructor(private pigmentsService: PigmentsService) { }

  ngOnInit(): void {
  }

}
