

// 15) Crie uma função que receba dois números como parâmetros e retorne "múltiplo" se o primeiro for múltiplo do segundo, ou "não múltiplo" caso contrário.


function multiplo(num1, num2) {
    if (num1 % num2 === 0) {
        return "Múltiplo!";
    } else {
        return "Não múltiplo!";
    }
}


console.log(multiplo(10, 2)); 
console.log(multiplo(10, 3));
console.log(multiplo(15, 5)); 
console.log(multiplo(7, 3));  
