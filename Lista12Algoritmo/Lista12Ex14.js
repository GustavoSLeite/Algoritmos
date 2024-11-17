


// 14) Crie uma função que receba três números como parâmetros e retorne o maior valor entre eles.

function maiorValor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return `O maior valor é o número 1 (${num1})`;
    } else if (num2 >= num1 && num2 >= num3) {
        return `O maior valor é o número 2 (${num2})`;
    } else {
        return `O maior valor é o número 3 (${num3})`;
    }
}


console.log(maiorValor(10, 20, 15)); 
console.log(maiorValor(5, 3, 8));   
console.log(maiorValor(7, 7, 7));    
