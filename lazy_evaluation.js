// Lazy evaluation ajuda garantir execução
function randomNumber() {
    return Math.random() * 10;
}
console.log(randomNumber());

/*
Uso dentro de outra função quando um
dos parâmetros for omitido
*/
function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));
