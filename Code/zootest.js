class Animal {
    letructor(nom,age,type){
        this.nom = nom;
        this.age = age;
        this.type = type;

    }
    toString() {
        console.log(`je m'appel ${this.nom}, 
    j'ai ${this.age} ans je suis de couleur ${this.couleur} 
et je suis un ${this.type}`);
    }
}
class Lion extends Animal{
    letructor(nom, age, couleur, type){
        super(nom, age, type);
        this.couleur = couleur;
        this.type = type;
    }
}

let lion1 = new Lion("yoyo",4,"vert","lion");

lion1.toString();