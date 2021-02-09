import { Accomplissement } from './accomplissement';
import {ANALYSE, PROTOCOLE, HTML, JS, CSHARP, MSSQL, MONGO} from './listecompetences';
//liste des accomplissements utilisés: expériences et formations

export const DEVELOPPEUR : number = 0,
             WEBMASTER: number = 1,
             PHARMACIEN: number = 2,
             DOCTORANT: number = 3,
             DAWAN: number = 4,
             DORANCO: number = 5,
             DOCTORAT: number = 6,
             listeAccomplissements: Accomplissement[] = [
                {
                    nom: "Développeur .NET",
                    cadre: "Dawan",
                    lieu: "Paris",
                    descriptif: "Projet de fin de formation:<br>Simulation de co-évolution de trois espèces animales.",
                    periode: "2020 2021",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 10},
                        {nom: PROTOCOLE, progression: 20},
                        {nom: JS, progression: 10},
                        {nom: CSHARP, progression: 40},
                        {nom: MSSQL, progression: 30}
                    ]
                },
                {
                    nom: "Développeur de site",
                    cadre: "Fortuna",
                    lieu: "Noisy-le-Grand",
                    descriptif: "Création <em>de novo</em> du <a href='http://www.association-fortuna.com' target='_blank' rel='noopener noreferrer'>site</a> de l'association d'évocation historique Fortuna.",
                    periode: "2020",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 10},
                        {nom: HTML, progression: 30},
                        {nom: JS, progression: 20}
                    ]
                },
                {
                    nom: "Pharmacien assistant",
                    cadre: "Officines",
                    lieu: "Ile-de-France",
                    descriptif: "Conseil, vente et gestion de stock.",
                    periode: "2009 2019",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 10},
                        {nom: PROTOCOLE, progression: 10}
                    ]
                },
                {
                    nom: "Doctorant",
                    cadre: "Centre de Recherche des Cordeliers",
                    lieu: "Paris",
                    descriptif: "Analyse, élaboration de modèle, mise au point de protocoles, récolte et interprétation de données, encadrement de stagiaires.",
                    periode: "2005 2009",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 40},
                        {nom: PROTOCOLE, progression: 70}
                    ]
                },
                {
                    nom: "Développeur .NET",
                    cadre: "Dawan",
                    lieu: "Paris",
                    descriptif: "Acquisition des compétences pour développer des applications en .NET (399 heures).",
                    periode: "2020 2021",
                    actif: false,
                    competencesLiees: [
                        {nom: CSHARP, progression: 50},
                        {nom: MSSQL, progression: 30}
                    ]
                },
                {
                    nom: "Développeur de site web dynamique",
                    cadre: "Doranco",
                    lieu: "Bagnolet",
                    descriptif: "Reconversion dans les technologies du numérique (280 heures).",
                    periode: "2020",
                    actif: false,
                    competencesLiees: [
                        {nom: HTML, progression: 50},
                        {nom: JS, progression: 40},
                        {nom: MONGO, progression: 30}
                    ]
                },
                {
                    nom: "Doctorat en biologie",
                    cadre: "UPMC",
                    lieu: "Paris",
                    descriptif: "Répartition des triglycérides entre stockage et sécrétion dans les cellules entérocytaires : Un mécanisme de contrôle de la sécrétion des lipoprotéines riches en triglycérides ?",
                    periode: "2005 2009",
                    actif: false,
                    competencesLiees: [
                        {nom: ANALYSE, progression: 30}
                    ]
                },
             ];