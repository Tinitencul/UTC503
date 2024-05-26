class Zoo {
    letructor() {
        this.animaux = [];
    }
    ajouterAnimal(animal) {
        this.animaux.push(animal);
    }
    waterNeed() {
        let totalConsommation = 0;

        for (let animal of this.animaux) {
            totalConsommation += animal.consommation;
        }
        console.log(`voici la consommation total : ${totalConsommation}`);
    }
}
class Animal {
    letructor(nom, age, type, consommation){
        this.nom = nom;
        this.age = age;
        this.type = type;
        this.consommation = consommation;
    }
    afficherInfos() {
        console.log(`je suis un ${this.type}, 
        je m'appel ${this.nom}, j'ai ${this.age} ans, 
        et je consomme ${this.consommation} litres par jour`);
    }
}
class Lion extends Animal{
    letructor(nom, age, type, consommation){
        super(nom, age, type, consommation);
        //this.couleur = couleur;
    }
}
class Dromadaire extends Animal{
    letructor(nom, age, type, consommation){
        super(nom, age, type, consommation);
        //this.couleur = couleur;
    }
}

let monZoo = new Zoo();

let lion1 = new Lion("yoyo","4","lion",10);
let lion2 = new Lion("pipo","3","lion",10);
let droma1 = new Dromadaire("pipo","3","dromadaire",10);
let droma2 = new Dromadaire("pipo","3","dromadaire",10);
let droma3 = new Dromadaire("pipo","3","dromadaire",10);

monZoo.ajouterAnimal(lion1);
monZoo.ajouterAnimal(lion2);

monZoo.ajouterAnimal(droma1);
monZoo.ajouterAnimal(droma2);
monZoo.ajouterAnimal(droma3);


/*lion1.afficherInfos();
/*lion2.afficherInfos();
droma1.afficherInfos();
droma2.afficherInfos();
droma3.afficherInfos();
*/
monZoo.waterNeed()