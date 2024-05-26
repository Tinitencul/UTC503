// Fonction pour calculer la suite de Fibonacci jusqu'à un certain nombre de termes
function fibonacci(n) {
    // Initialisation des deux premiers termes de la suite
    let fibArray = [0, 1];

    // Boucle pour générer les termes suivants de la suite
    for (let i = 2; i < n; i++) {
        // Calcul du terme suivant en additionnant les deux derniers termes
        let nextFib = fibArray[i - 1] + fibArray[i - 2];
        
        // Ajout du terme suivant à la liste
        fibArray.push(nextFib);
    }

    // Retourne la suite de Fibonacci générée
    return fibArray;
}

// Nombre de termes de la suite de Fibonacci à générer
let terms = 10;

// Appel de la fonction pour générer la suite de Fibonacci
let fibonacciSequence = fibonacci(terms);

// Affichage des termes de la suite de Fibonacci
console.log("Suite de Fibonacci jusqu'au", terms, "ème terme :", fibonacciSequence);
