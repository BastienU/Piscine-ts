interface Vehicule {
    marque: string;
    annee: number;
}

function isVehicule(obj: any): obj is Vehicule
{
    if(typeof obj.marque === "string")
        return true;
    else if(typeof obj.annee === "number")
        return true;
    else
        return false;
}

function afficherVehicule(obj: any)
{
    if(isVehicule(obj))
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    else
        console.log("Objet invalide pour un véhicule.");
}

const objetVehicule: Vehicule = {
    marque: "Fiat",
    annee: 1995
}

//const objetPasVehicule: Vehicule = {
//    marque: "Renault",
//    annee: "2014"
//}

afficherVehicule(objetVehicule);
//afficherVehicule(objetPasVehicule);