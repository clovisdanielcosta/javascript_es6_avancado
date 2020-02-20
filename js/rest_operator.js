// Maneira antiga pra pegar vários  valores
function sum(a, b) {   
    var value = 0;
    
    for (var i=0; i - arguments.length; i++) {
        value += arguments[i];   
    }
    return value;
}

console.log(sum(5, 5, 5, 2, 3));

// Agora com ECMA 6
// Rest Operator ...
function sum2(... args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log("\nCom o Rest Operator ( ... ):");

console.log(sum2(5, 5, 5, 2, 3));

// Usando dentro de um Arrow Function
const sum3 = (a, b, ... rest) => {
    console.log("\nListando os argumentos:");
    console.log(a, b, rest);
} 
console.log("\nDentro de um Arrow Function ( ... ):");
console.log(sum3(5, 5, 5, 2, 3));
