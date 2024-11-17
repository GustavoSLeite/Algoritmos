

// 6) Crie uma função que receba um número como parâmetro e retorne "divisível por 3" se for divisível por 3, caso contrário, retorne "não divisível por 3".


function divisivel_por_3 (numero) {

    if(numero % 3 == 0){

        return `O número ${numero} é divisível por 3!`

    } else {

         return `O número ${numero} não é divisível por 3!`
    }
}

console.log(divisivel_por_3(9))
console.log(divisivel_por_3(32))
console.log(divisivel_por_3(27))
