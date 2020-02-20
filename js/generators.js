// Symbols
const uniqueId = Symbol('Hello');

// Propriedade Well Known Symbol 
Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Inovation One';

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

// Generators - São fubções com pausas que dispausam, retornam vaores, etc...
// se comunicam com o usuário através da interface
function* hello() {
    
    console.log('Hello');
    yield 1;
    
    // Além de pausar a função pode passar dados externos para dentro da função
    console.log('from');
    const value = yield 2; //Passando valores
    
    console.log(value);
} 

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

// Exemplo de uso para range infinitos
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it2 = naturalNumbers();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

// De modo mais simples o Generator usado na iteração
// Construindo a Interface para a iteração do objeto com meta-propriedade
const obj7 = {
    values: [1, 2, 3, 4, 5],
    *[Symbol.iterator] () {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (const value of obj7) {
    console.log(value);
}



