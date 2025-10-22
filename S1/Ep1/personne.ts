interface Personne {
  readonly id: number;
  nom: string;
  age: number;
}

function afficherPersonne(personne : Personne)
{
  console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

const personne1 : Personne = {
  id: 1,
  nom : "Alice",
  age : 25
}

afficherPersonne(personne1);