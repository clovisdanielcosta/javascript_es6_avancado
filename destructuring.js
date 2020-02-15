// Antes do ECMA6 para pegar os valores dos itens do array
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Apos ECMA6 : Destructuring Assignment
// Com Arrays: Não cria um array. Cria um padrão de destruir o array.
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(apple, apple2);
console.log(tomato, tomato2);

// Com objetos  
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
        }
};

var age = obj.props.age

// Destructuring Assignment
var {name} = obj;
console.log(name);

var [apple2] = arr;
console.log(apple2);


// Destructuring de multiníveis
var {
    props: {
        age: age2,
        favoriteColors: [color1, color2]
    }
} = obj;

console.log(color2);

// Com objetos
var arr2 = [{name: 'Apple', type: 'fruit'}];

    // Da forma antiga
    var fruit1 = arr2[0].name;
    // Com destructuring
    var [{ name }] = arr2;
    // Se quiser atribuir à variável um nome customizado
    var [{ name: fruitName}] = arr2;
    
    console.log(fruit1, name, fruitName);

// Com functions
function sum (arr3) {
    return arr3[0] + arr3[1];
}

console.log(sum([5, 5]));

    // Com destructuring{}
    function sum2 ([a, b]) {
        return a + b;
    }

    console.log(sum([5, 5]));
    
    // Com default values
    function sum3 ([a, b] = [3, 3]) {
        return a + b;
    }
    
    console.log(sum3());
    console.log(sum3([4, 4]));
    
    




