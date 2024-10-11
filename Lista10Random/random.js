function numeroAleatorio (a,b){

    return Math.floor(Math.random() * (b - a + 1)) + a

}

console.log(numeroAleatorio(7,15))