interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const maVoiture: Voiture = {
    marque: "Renault",
    modele: "Scenic",
    annee: 2014
}

console.log(getProperty(maVoiture, "marque"));