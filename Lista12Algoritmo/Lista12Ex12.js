

// 12) Crie uma função que receba dois números como parâmetros e retorne o resultado de uma subtração, se o primeiro número for maior, ou o resultado de uma soma, se o segundo número for maior.

function Soma_ou_Sub (num1, num2) {

if (num1 > num2){

    return num1 - num2

} else{

    return num1 + num2

}
}

console.log(Soma_ou_Sub(10,5))
console.log(Soma_ou_Sub(2,5))
