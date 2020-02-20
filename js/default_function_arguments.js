// Função normal antiga
function multiply(a, b) {
    return a * b;
};
console.log(multiply(5, 5));

/*
Se um dos parâmetros não fosse enviado
resultaria em erro
*/
function multiply2(a, b) {
    return a * b;
};
console.log(multiply2(5)); // Return "NaN"

// Para contornar se usava o || (ou)
function multiply3(a, b) {
    b = b || 1;
    return a * b;
};
console.log(multiply3(5)); // Return 5

// Com ECMA 6 menos verboso
function multiply4(a, b = 1) {
    return a * b;
};
console.log('\nCom ECMA 6:')
console.log(multiply4(5, 5));
console.log(multiply4(5, 0));
console.log(multiply4(5));






