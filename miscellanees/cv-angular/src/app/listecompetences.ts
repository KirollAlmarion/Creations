import { Competence } from './competence';
//liste des compétences utilisées

export const ANALYSE: number = 0,
             PROTOCOLE: number = 1,
             HTML: number = 2,
             JS: number = 3,
             REACT: number = 4,
             ANGULAR: number = 5,
             MONGO: number = 6,
             ANGLAIS: number = 7,
             FRANCAIS: number = 8,
             listeCompetences: Competence[] = [
                 {progression: 0, descriptif: "Analyser et comprendre une situation"},
                 {progression: 0, descriptif: "Elaborer un protocole pour résoudre un problème"},
                 {progression: 0, descriptif: "HTML5/CSS3"},
                 {progression: 0, descriptif: "JavaScript"},
                 {progression: 0, descriptif: "React et redux"},
                 {progression: 0, descriptif: "Angular"},
                 {progression: 0, descriptif: "MongoDB"},
                 {progression: 75, descriptif: "Anglais"},
                 {progression: 100, descriptif: "Français"}
             ];