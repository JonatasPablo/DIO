// Conceito de Booleanos e Condicionais

const camisetaJonatasAzul = true;
const camisetaJonatasPreta = false;

10 > 5; // true
10 < 5; // false

// const numero = 357;

// const eNumeroPar = (numero % 2) === 0;

// console.log(eNumeroPar);

// if(eNumeroPar) {
//     console.log('É par');
// } else {
//     console.log('É ímpar');
// }

const numero = 14;

const numeroDivisivelPor5 = (numero % 5) === 0;

console.log(numeroDivisivelPor5);

if (numero === 0) {
    console.log('O número é 0, portanto não é divisível por 5');
} else if (numeroDivisivelPor5){
    console.log('Sim, é divisível por 5');
} else {
    console.log('Não, não é divisível por 5');
    
}