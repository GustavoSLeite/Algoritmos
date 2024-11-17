

// 3) Crie uma função que receba um número como parâmetro e retorne "positivo" se o número for maior que zero, "negativo" se for menor que zero, ou "zero" se for igual a zero.

function positivo_negativo (numero) {

    if(numero < 0){

        return `O número ${numero} é negativo!` 

    } else if(numero == 0){

        return `O número ${numero} é neutro!` 
    } else{

        return `O número ${numero} é positivo!`
    }

}

console.log(positivo_negativo(-35))
console.log(positivo_negativo(12))
console.log(positivo_negativo(0))

