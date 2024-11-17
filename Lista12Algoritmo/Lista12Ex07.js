

// 7) Crie uma função que receba uma string como parâmetro e retorne o número de vogais que ela contém.


function qtd_vogais (palavra) {

   var vogais = ['a' , 'e' , 'i' , 'o' , 'u', 'A' , 'E' , 'I' , 'O' , 'U'];
   var contador = 0;

   for(var i = 0 ; i < palavra.length; i++) {

    if(vogais.includes(palavra[i])){
        contador++
    }

 

   }

   return `A palavra ${palavra} possui ${contador} vogais.`



}

console.log(qtd_vogais("Gustavo"))
console.log(qtd_vogais("Javascript"))
console.log(qtd_vogais("Algoritmo"))

