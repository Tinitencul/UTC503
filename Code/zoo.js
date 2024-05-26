class Animal{

    #nom;

    letructor(nom) {
        this.#nom = nom;
    }
    toString() {
        return "je suis un " + this.#nom;
    }
    
}

//let chien = new Animal("chien");
let chat = new Animal();
chat.nom = "chaaat";
console.log(chat.toString());