function maiorValor(vetor) {
    if (vetor.length === 0) {
        return undefined; // Retorna undefined se o vetor estiver vazio
    }

    var maior = vetor[0];
    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return maior;
}

// Exemplo de uso
var numeros = [3, 5, 7, 2, 8];
var resultado = maiorValor(numeros);
console.log("O maior valor presente no vetor é: " + resultado);
