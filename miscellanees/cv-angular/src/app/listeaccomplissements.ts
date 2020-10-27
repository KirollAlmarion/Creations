import { Accomplissement } from './accomplissement';
import {ANALYSE, PROTOCOLE, HTML, JS, REACT, ANGULAR, MONGO} from './listecompetences';
//liste des accomplissements utilisés

export const DEVELOPPEUR: number = 0,
             PHARMACIEN: number = 1,
             DOCTORANT: number = 2,
             DORANCO: number = 3,
             DOCTORAT: number = 4,
             listeAccomplissements: Accomplissement[] = [
                {
                    nom: "Développeur de site",
                    cadre: "Fortuna",
                    lieu: "Noisy-le-Grand",
                    descriptif: "Création <em>de novo</em> du <a href='http://www.association-fortuna.com' target='_blank' rel='noopener noreferrer'>site</a> de l'association d'évocation historique Fortuna.",
                    periode: "Depuis avril 2020",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 10},
                        {nom: PROTOCOLE, progression: 10},
                        {nom: HTML, progression: 40},
                        {nom: JS, progression: 30}
                    ]
                },
                {
                    nom: "Pharmacien assistant",
                    cadre: "Officines",
                    lieu: "Ile-de-France",
                    descriptif: "Conseil, vente et gestion de stock.",
                    periode: "De oct. 2009 à oct. 2019",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 10},
                    ]
                },
                {
                    nom: "Doctorant",
                    cadre: "Centre de Recherche des Cordeliers",
                    lieu: "Paris",
                    descriptif: "Analyse, élaboration de modèle, mise au point de protocoles, récolte et interprétation de données, encadrement de stagiaires.",
                    periode: "De jan. 2005 à sept. 2009",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 40},
                        {nom: PROTOCOLE, progression: 90}
                    ]
                },
                {
                    nom: "Développeur de site web dynamique",
                    cadre: "Doranco",
                    lieu: "Bagnolet",
                    descriptif: "Reconversion dans les technologies du numérique.",
                    periode: "D'avril 2020 à juin 2020",
                    actif: false,
                    competencesLiees: [
                        {nom: HTML, progression: 50},
                        {nom: JS, progression: 50},
                        {nom: REACT, progression: 50},
                        {nom: ANGULAR, progression: 50},
                        {nom: MONGO, progression: 40}
                    ]
                },
                {
                    nom: "Doctorat en biologie",
                    cadre: "UPMC",
                    lieu: "Paris",
                    descriptif: "Répartition des triglycérides entre stockage et sécrétion dans les cellules entérocytaires : Un mécanisme de contrôle de la sécrétion des lipoprotéines riches en triglycérides ?",
                    periode: "De jan. 2005 à sept. 2009",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 40}
                    ]
                },
             ];