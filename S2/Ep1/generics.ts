const tableau1 : number[] = [1, 2, 3];
const tableau2 : string[] = ["a", "b", "c"];

function premierElement<T>(tableau: T[]) {
    console.log(tableau[0]);
}

premierElement(tableau1);
premierElement(tableau2);