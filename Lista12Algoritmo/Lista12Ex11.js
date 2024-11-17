

// 11) Crie uma função que receba um número como parâmetro e retorne "positivo e par" se for maior que zero e par, ou "negativo ou ímpar" caso contrário.


function verificarNum(numero) {
    if (numero > 0 && numero % 2 == 0) {

        return `O número ${numero} é positivo e par!`;

    } else {

        return `O número ${numero} é negativo ou ímpar!`;
        
    }
}



console.log(verificarNum(-5))
console.log(verificarNum(-16))
console.log(verificarNum(16))
console.log(verificarNum(32))

