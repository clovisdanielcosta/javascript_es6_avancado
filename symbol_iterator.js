// É um tipo de variavel para identificador único
// Usado para garantir que a variavel não seja acessada sem querer
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

// Se tentar capturar a propriedade com os métodos normais não retornará.
console.log(Object.keys(obj));

// Terá de usar
console.log(Object.getOwnPropertySymbols(obj));

// Propriedade Well Known Symbol 
// Symbol.iterator
Symbol.iterator;
Symbol.split;
Symbol.toPrimitive;
Symbol.asyncIterator;
Symbol.toStringTag;

/* 
Para não haver colisão de propriedades se responsabiliza
pela iteração do array. Trata-se de uma interface para consumir um array
ou uma lista qualquer
*/

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Para pegar os valores da minha interface usando While
const arr2 = [1, 2, 3, 4];

const it2 = arr2[Symbol.iterator]();

while (true) {
    let { value, done} = it2.next();

    if (done) {
        break;
    }

    console.log(value);
}

// Com ECMA 6 fica mais simples
console.log('\n Com Ecma 6:');

for (let value of arr) {
    console.log(value); 
}

// Com Strings
console.log('\n Com Strings:');

const str = 'Digital Inovation One';

for (let value of str) {
    console.log(value);
}

// Consumindo um iterador de array
const obj6 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it6 = obj6[Symbol.iterator]();

console.log('\n 1 iteração: ', it6.next());
console.log('\n 2 iteração: ', it6.next());
console.log('\n 3 iteração: ', it6.next());
console.log('\n 4 iteração: ', it6.next());
console.log('\n 5 iteração: ', it6.next());
