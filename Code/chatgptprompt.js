// Exemple d'utilisation de let pour déclarer des variables locales
function exampleFunction() {
    let x = 10; // variable locale à la fonction exampleFunction()
    if (true) {
        let y = 20; // variable locale au bloc if
        console.log(x); // x est accessible ici
        console.log(y); // y est accessible ici
    }
    // console.log(y); // y n'est pas accessible ici, car il est défini dans le bloc if
}

exampleFunction();
