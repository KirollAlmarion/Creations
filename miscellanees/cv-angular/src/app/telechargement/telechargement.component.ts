import { Component, OnInit } from '@angular/core';
import {PigmentsService} from '../pigments.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-telechargement',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './telechargement.component.html',
  styleUrls: ['./telechargement.component.css']
})
export class TelechargementComponent implements OnInit {
  dy = 0;
  location: Location;

  fichier(): string {
    return `${location.href}assets/cv-${this.pigmentsService.couleurActive()}.pdf`
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

  constructor(private pigmentsService: PigmentsService, location: Location) { this.location = location;}

  ngOnInit(): void {
  }

}
