interface Personne {
  readonly id: number;
  nom: string;
  age: number;
  adresse?: Adresse;
}

interface Adresse {
    rue: string;
    ville: string;
}

function afficherPersonneAvancée(personne : Personne)
{
    if(personne.adresse)
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    else
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`);

}

const personne1 : Personne = {
  id: 1,
  nom: "Alice",
  age: 25
}

const personne2 : Personne = {
  id: 2,
  nom: "Marie",
  age: 24,
  adresse : {
    rue: "2 Boulevard des Champs Elysées",
    ville: "Paris"
  }
}

const personne3 : Personne = {
  id: 3,
  nom: "Adrien",
  age: 34
}

afficherPersonneAvancée(personne1);
afficherPersonneAvancée(personne2);
afficherPersonneAvancée(personne3);