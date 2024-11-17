

// 2) Crie uma função que receba um número como parâmetro e retorne "par" se o número for par, ou "ímpar" se for ímpar.

function par_impar(num) {

    if(num % 2 == 0){

        return `O número ${num} é par!`
    } else{
        return `O número ${num} é impar!`
    }
}

console.log(par_impar(16))
console.log(par_impar(27))

