interface IAnimal
{
    nom: string;
    seDeplacer():void
}

class Animal implements IAnimal
{
    nom: string;

    constructor(nom: string)
    {
        this.nom = nom;
    }

    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}

class Chien extends Animal
{
    override seDeplacer(): void {
        console.log(`"Le chien ${this.nom} court."`);
    }
}

class Chat extends Animal
{
    override seDeplacer(): void {
        console.log(`"Le chat ${this.nom} saute."`);
    }
}

function faireSeDeplacer(animaux: IAnimal[])
{
    animaux.forEach(animal => {
        animal.seDeplacer();
    });
}

const animal = new Animal("Patrick");
animal.seDeplacer();

const animaux: Animal[] = [
  new Chien("Gertrude"),
  new Chat("Josepha"),
  new Chien("Albertine"),
  new Chat("Josette")
];

faireSeDeplacer(animaux);