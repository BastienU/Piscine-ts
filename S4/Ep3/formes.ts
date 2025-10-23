abstract class Forme {
    abstract calculerSurface(): number
}

class Rectangle extends Forme {
    largeur: number;
    hauteur: number;

    constructor(largeur: number, hauteur: number) {
    super();
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  override calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}

class Cercle extends Forme {
    rayon: number;

    constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }

  override calculerSurface(): number {
    return (Math.PI * this.rayon * this.rayon)
  }
}

const rectangle = new Rectangle(10, 20);
const cercle = new Cercle(15);

console.log(rectangle.calculerSurface());
console.log(cercle.calculerSurface());