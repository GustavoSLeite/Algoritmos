

// 9) Crie uma função que receba um número como parâmetro e retorne "primo" se for um número primo, ou "não primo" caso contrário. 

function verificarPrimo(numero) {
    if (numero <= 1) return "não primo";
    if (numero === 2) return "primo";
    if (numero % 2 === 0) return "não primo";
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return "não primo";
    }
    return "primo";
}


console.log(verificarPrimo(29)); 
console.log(verificarPrimo(15)); 
console.log(verificarPrimo(2));  
console.log(verificarPrimo(1));  
