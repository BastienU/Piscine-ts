interface Lengthwise {
  length: number;
}

const tableau1 : number[] = [1, 2, 3];
const tableau2 : string[] = [];

function premierElement<T extends Lengthwise>(tableau: T): any {
    if (tableau.length > 0)
        console.log((tableau as any)[0]);
    else
        console.log("Ce tableau est vide, il n'y a rien à afficher.")
}

premierElement(tableau1);
premierElement(tableau2);