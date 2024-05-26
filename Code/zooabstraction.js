/*
class Zoo {
    letructor(){
        this.animaux = [];
    }
    ajouterAnimal() {
        this.animaux.push(animal);
    }
}

class Animal {
    letructor(nom, consommation) {
        this.nom = nom;
        this.consommation = consommation; // en litres
    }
}


let lion = new Animal();

console.log(chat.toString());
*/
class Animal {
    letructor(nom, consommation) {
        this.nom = nom;
        this.consommation = consommation; // en litres
    }
}

class Zoo {
    letructor() {
        this.animaux = [];
    }

    ajouterAnimal(animal) {
        this.animaux.push(animal);
    }

    calculerBesoinsEau() {
        let besoinEauTotal = 0;
        for (let animal of this.animaux) {
            besoinEauTotal += animal.consommation;
        }
        console.log("Besoins totaux en eau du zoo par jour:", besoinEauTotal, "litres");
    }
}

// Création des instances d'animaux
let lion1 = new Animal("lion", 10); // Consommation quotidienne de 10 litres
let lion2 = new Animal("lion", 10); // Consommation quotidienne de 10 litres

let dromadaire1 = new Animal("dromadaire", 30 / 30); // Consommation quotidienne de 1 litre (30 litres par mois)
let dromadaire2 = new Animal("dromadaire", 30 / 30); // Consommation quotidienne de 1 litre (30 litres par mois)
let dromadaire3 = new Animal("dromadaire", 30 / 30); // Consommation quotidienne de 1 litre (30 litres par mois)

// Création de l'instance du zoo
let monZoo = new Zoo();

// Ajout des animaux au zoo
monZoo.ajouterAnimal(lion1);
monZoo.ajouterAnimal(lion2);
monZoo.ajouterAnimal(dromadaire1);
monZoo.ajouterAnimal(dromadaire2);
monZoo.ajouterAnimal(dromadaire3);

// Calcul des besoins en eau du zoo
monZoo.calculerBesoinsEau();
