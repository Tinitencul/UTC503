function fibonacci(n, memo = {}) {
    // Vérifier si la valeur est déjà calculée
    if (memo[n] !== undefined) {
        return memo[n];
    }
    // Condition de base
    if (n < 2) {
        return n;
    }
    // Calculer et mémoriser la valeur
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Exemple d'utilisation
console.log(fibonacci(30));