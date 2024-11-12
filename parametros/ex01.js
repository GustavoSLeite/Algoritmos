function comparar(a, b) {
    if (a == b) {
        return "Ambos são iguais!"
    } else if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(comparar(5,10))
console.log(comparar(10,20))
console.log(comparar(1,5))
console.log(comparar(8,8))

