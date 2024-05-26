class Zoo {
    letructor() {
        this.animaux = [];
    }
    ajouterAnimal(animal) {
        this.animaux.push(animal);
    }
    waterNeed() {
        this.conso = Number;
    }
}

class Animal {
    letructor(nom,age){
        this.nom = nom;
        this.age = age;
    }
    afficherInfos() {
        console.log(`Nom: ${this.nom}, Age: ${this.age}`);
    }
    waterNeed() {
        this._conso = Number;
    }
}

class Lion extends Animal{
    letructor(nom, age, couleur){
        super(nom, age);
        this.couleur = couleur;
    }
    grogner() {
        console.log("GROAAAA");
    }
}

class Dromadaire extends Animal{
    letructor(nom, age, couleur){
        super(nom, age);
        this.couleur = couleur;
    }
    cracher(){
        console.log("crhhhchcch")
    }
}
let lion1 = new Lion("yoyo",4,"vert");
let lion2 = new Lion("pipi",6,"rouge");

let droma1 = new Dromadaire("yaya",8,"bleu");
let droma2 = new Dromadaire("popo",10,"jaune");
let droma3 = new Dromadaire("keke",2,"beige");

lion1.afficherInfos();
lion1.grogner();
    