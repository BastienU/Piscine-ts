interface Employe {
    nom: string;
    poste: string;
}

interface Client {
    nom: string;
    entreprise: string;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(PersonnePro: PersonnePro)
{
    if ("poste" in PersonnePro)
        console.log(`Employé: ${PersonnePro.nom} travaille comme ${PersonnePro.poste}.`)
    else if ("entreprise" in PersonnePro)
        console.log(`Client: ${PersonnePro.nom} est associé à l'entreprise ${PersonnePro.entreprise}.`)
}

const employe1 : Employe = {
    nom: "Hugo",
    poste: "Développeur PHP"
}

const client1 : Client = {
    nom: "Célian",
    entreprise: "MDS"
}

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);