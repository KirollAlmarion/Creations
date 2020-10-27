import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PigmentsService {
  couleur: string = "teal";

  definiCouleurActive(colori: string): void {
    this.couleur = colori;
  }

  couleurActive(): string {
    return this.couleur
  }

  constructor() { }
}
