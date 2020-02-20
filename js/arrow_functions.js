// Function
var sumOld = function(a, b) {
    return a + b;
};

// Arrow function
var sum = (a, b) => a + b;
console.log(sum(5, 8)); // Neste caso o return está implícito

// Se a função for mais estruturada, com if, return, etc, precisa das chaves.
var sum2 = (a, b) => {
    return a + b;
}

// Pode-se ocultar os parenteses se houver apenas um argumento
var sum3 = a => a + 5;
console.log(sum3(4));

// Return com objetos literais
var createObj = () => ({test: 123});
console.log(createObj());

/*
Uso com o this para evitar problemas de escopo de variáveis
*/
var obj = {
    showContext: function showContext() {
        //This = obj

        setTimeout(() => {
            this.log('After 5000 ms');
        }, 5000);
    },
    log: function log(value) {
        console.log(value);
    }
}; 

obj.showContext();
