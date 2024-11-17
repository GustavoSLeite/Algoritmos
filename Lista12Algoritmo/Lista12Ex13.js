

// 13) Crie uma função que receba um número como parâmetro e retorne a soma de todos os números ímpares menores que ele.

function somaImparesMenoresQue(numero) {
    let soma = 0;
    for (var i = 1; i < numero; i += 2) {
        soma += i;
    }
    return soma;
}

// Exemplos de uso:
console.log(somaImparesMenoresQue(10)); // Output: 25 (1 + 3 + 5 + 7 + 9)
console.log(somaImparesMenoresQue(15)); // Output: 49 (1 + 3 + 5 + 7 + 9 + 11 + 13)
console.log(somaImparesMenoresQue(5));  // Output: 4 (1 + 3)
