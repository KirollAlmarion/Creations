import { CompetenceLiee } from './competence';

export interface Accomplissement {
    nom: string;
    cadre: string;
    lieu: string;
    descriptif: string;
    periode: string;
    actif: boolean;
    competencesLiees: CompetenceLiee[];
  }