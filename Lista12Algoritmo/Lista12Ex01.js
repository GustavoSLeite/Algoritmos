

// 1) Crie uma função que receba dois números como parâmetros e retorne o maior deles.


function maiorValor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Exemplos de uso:
console.log(maiorValor(5, 10)); // Output: 10
console.log(maiorValor(20, 15)); // Output: 20
console.log(maiorValor(7, 7)); // Output: 7