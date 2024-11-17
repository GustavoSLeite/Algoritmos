



// 16) Crie uma função que receba um número como parâmetro e retorne a soma de todos os números pares menores que ele.


function somaParesMenoresQue(numero) {
    let soma = 0;
    for (var i = 2; i < numero; i += 2) {
        soma += i;
    }
    return soma;
}


console.log(somaParesMenoresQue(10)); // Output: 20 (2 + 4 + 6 + 8)
console.log(somaParesMenoresQue(15)); // Output: 42 (2 + 4 + 6 + 8 + 10 + 12 + 14)
console.log(somaParesMenoresQue(5));  // Output: 6 (2 + 4)

