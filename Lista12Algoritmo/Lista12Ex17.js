

// 17) Crie uma função que receba um número e um caractere como parâmetros e retorne o caractere repetido o número de vezes especificado.

function repetirCaractere(num, caractere) {
    if (num < 0) {
        return "Número inválido. Por favor, insira um número não-negativo.";
    }
    let resultado = "";
    for (var i = 0; i < num; i++) {
        resultado += caractere;
    }
    return resultado;
}


console.log(repetirCaractere(5, 'a'));  // Output: aaaaa
console.log(repetirCaractere(3, '*'));  // Output: ***
console.log(repetirCaractere(0, 'x'));  // Output: (string vazia)
console.log(repetirCaractere(-2, 'b')); // Output: Número inválido. Por favor, insira um número não-negativo.
