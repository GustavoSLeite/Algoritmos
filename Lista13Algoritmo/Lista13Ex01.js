function somaDosElementos(vetor) {
    var soma = 0;
    for (var i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

// Exemplo de uso
var numeros = [1, 2, 3, 4, 5];
var resultado = somaDosElementos(numeros);
console.log("A soma dos elementos do vetor é: " + resultado);
