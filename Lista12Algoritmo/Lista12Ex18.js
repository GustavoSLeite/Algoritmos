

// 18) Crie uma função que receba dois números como parâmetros e retorne "próximos" se a diferença entre eles for menor que 5, ou "distantes" caso contrário.

function verificarDistancia(num1, num2) {
    if (Math.abs(num1 - num2) < 5) {
        return "próximos";
    } else {
        return "distantes";
    }
}

console.log(verificarDistancia(10, 14)); // Output: próximos
console.log(verificarDistancia(10, 20)); // Output: distantes
console.log(verificarDistancia(5, 9));   // Output: próximos
console.log(verificarDistancia(1, 6));   // Output: distantes
