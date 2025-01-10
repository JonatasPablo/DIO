// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis, sendo elas:
// 1- preço do combustível;
// 2- gasto médio de combustível do carro por KM;
// 3- distância em KM da viagem;

// imprima no console o valor que será gasto de combustível para realizar esta viagem.

const precoCombustivel = 5.79; // const porque durante a executação do programa o preço do combustível não muda.
var gastoMedioKm = 7;
var distanciaKm = 56;

// var valorGasto = (distanciaKm / gastoMedioKm) * precoCombustivel;

var valorGasto = ((distanciaKm / gastoMedioKm) * precoCombustivel).toFixed(2); // arredonda o valor para 2 casas decimais. Outro modo de fazer o arredondamento é direto no console.log: console.log(valorGasto.toFixed(2));

console.log(valorGasto);
