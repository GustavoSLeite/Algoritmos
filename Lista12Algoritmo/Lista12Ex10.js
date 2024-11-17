

 // 10) Crie uma função que receba um número como parâmetro e retorne o seu fatorial.

// Ex: 5 -> 120 | 6 > 720 ...




function calcularFatorial(numero) {
    if (numero < 0) {
        return "Número inválido. O fatorial não é definido para números negativos.";
    }
    if (numero === 0 || numero === 1) {
        return 1;
    }
    var fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Exemplos de uso:
console.log(calcularFatorial(5)); 
console.log(calcularFatorial(0)); 
console.log(calcularFatorial(7)); 
