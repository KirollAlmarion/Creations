export const SERVEUR = "http://localhost:4000";//"https://serveur-lords.loca.lt"
export const INACTIF = 0,
             SCOTT = 1,
             MAKGILL = 2,
             MACDONNELL = 3,
             WEMYSS = 4,
             FERGUSSON = 5,
             FORSYTH = 6,
             COCKBURN = 7,
             COCHRANE = 8,
             BRUCE = 9;
             
export const CLANS = [
                        {
                            nom: "Inactif",
                            pouvoir: "Inactif",
                            couleur: "white",
                        },
                        {
                            nom: "Scott",
                            pouvoir: "Copiez le pouvoir d'un autre allié",
                            couleur: "forestgreen",
                        },
                        {
                            nom: "MakGill",
                            pouvoir: "Engagez un autre allié",
                            couleur: "goldenrod",
                        },
                        {
                            nom: "MacDonnell",
                            pouvoir: "Reste une manche de plus",
                            couleur: "darkgreen",
                        },
                        {
                            nom: "Wemyss",
                            pouvoir: "Défaussez un autre allié",
                            couleur: "maroon",
                        },
                        {
                            nom: "Fergusson",
                            pouvoir: "Echangez-le contre un autre allié",
                            couleur: "chocolate",
                        },
                        {
                            nom: "Forsyth",
                            pouvoir: "Piochez une carte",
                            couleur: "saddlebrown",
                        },
                        {
                            nom: "Cockburn",
                            pouvoir: "Echangez-le contre un partisan",
                            couleur: "midnightblue",
                        },
                        {
                            nom: "Cochrane",
                            pouvoir: "Récupérez deux partisans",
                            couleur: "indigo",
                        },
                        {
                            nom: "Bruce",
                            pouvoir: "N'importe quel clan",
                            couleur: "black",
                        }
];

export let PAQUET = new Array(99);
//initialisation des cartes:
for (let leClan=1;leClan<9;leClan++){
    for (let i=0;i<12;i++){
        PAQUET[leClan + 8*i]= {
            clan: leClan,
            force: i+1,
        };        
    }
}
for (let i=97;i<99;i++){
    PAQUET[i]={
        clan: 9,
        force: 12
    }
}