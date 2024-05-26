// Fonction récursive pour calculer le n-ème terme de la suite de Fibonacci
function fibonacciRecursive(n) {
    // Cas de base : les deux premiers termes de la suite
    if (n <= 1) {
        return n;
    }
    // Cas récursif : calcul du terme en fonction des deux termes précédents
    else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

// Nombre de termes de la suite de Fibonacci à générer
let terms = 10;

// Tableau pour stocker les termes de la suite de Fibonacci
let fibonacciSequence = [];

// Génération de chaque terme de la suite en utilisant la fonction récursive
for (let i = 0; i < terms; i++) {
    fibonacciSequence.push(fibonacciRecursive(i));
}

// Affichage des termes de la suite de Fibonacci
console.log("Suite de Fibonacci jusqu'au", terms, "ème terme :", fibonacciSequence);
