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

const animal = new Animal("Patrick");
animal.seDeplacer();

