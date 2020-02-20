// Spread Operator ( ...)
const multiply = (... args) => args.reduce((acc, value) =>
                                acc * value, 1);

// Spread pega todos os itens e transforma em argumentos da nova
// função
const sum3 = (... rest) => {
    return multiply(...rest);
};

console.log(sum3(5, 5, 5, 2, 3));

// Também se aplica a Strings, literal objects, 
// objetos iteráveis
const str = 'Digital Inovation One';

function logArgs(...args) {
    console.log(args);
};

logArgs(...str);

// Shallow Clone: Clone Raso