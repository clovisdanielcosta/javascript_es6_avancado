// Normal atribuição com objetos
var prop1 = 'Atribuição de variável';

var obj = {
    prop1: prop1
}
console.log(obj);

// Short Hand no ECMA 6
var prop1 = 'Atribuição de variável';

var obj = {
    prop1 // Omite o lado esquerdo
}
console.log(obj);

// Uso também em funções
function method1() {
    console.log('Função acionada...');
}

var obj = {
    method1
};

obj.method1();



