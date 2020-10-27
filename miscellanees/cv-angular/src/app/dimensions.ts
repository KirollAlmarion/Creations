let hauteurFenetre: number = window.innerHeight,
    largeurFenetre: number = window.innerWidth;
let hauteurFinale: number, largeurFinale: number; 

if (largeurFenetre < hauteurFenetre / Math.SQRT2){
    largeurFinale = largeurFenetre;
    hauteurFinale = largeurFinale * Math.SQRT2;
} else {
    hauteurFinale = hauteurFenetre;
    largeurFinale = hauteurFinale / Math.SQRT2;
}

export let HAUTEUR: number = hauteurFinale,
           LARGEUR: number = largeurFinale;

document.querySelector('body').style.width = `${LARGEUR}px`;
document.querySelector('body').style.height = `${HAUTEUR}px`;