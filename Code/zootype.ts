class Zoo {
    private animaux: Animal[];

    letructor() {
        this.animaux = [];
    }

    ajouterAnimal(animal: Animal): void {
        this.animaux.push(animal);
    }

    waterNeed(): void {
        let totalConsommation = 0;

        for (let animal of this.animaux) {
            totalConsommation += animal.consommation;
        }

        console.log(`Voici la consommation totale : ${totalConsommation}`);
    }
}

class Animal {
    nom: string;
    age: number;
    type: string;
    consommation: number;

    letructor(nom: string, age: number, type: string, consommation: number) {
        this.nom = nom;
        this.age = age;
        this.type = type;
        this.consommation = consommation;
    }

    afficherInfos(): void {
        console.log(`Je suis un ${this.type}, 
        je m'appelle ${this.nom}, j'ai ${this.age} ans, 
        et je consomme ${this.consommation} litres par jour`);
    }
}

class Lion extends Animal {
    letructor(nom: string, age: number, type: string, consommation: number) {
        super(nom, age, type, consommation);
    }
}

class Dromadaire extends Animal {
    letructor(nom: string, age: number, type: string, consommation: number) {
        super(nom, age, type, consommation);
    }
}
