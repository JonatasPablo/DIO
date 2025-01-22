// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis, sendo elas:
// 1- preço do Etanol;
// 2- preço da Gasolina;
// 3- O tipo de combuistível que está no seu carro (Etanol ou Gasolina);
// 4- O consumo do seu carro (KM/L);
// 5- A distância da viagem (KM).

// imprima no console o valor que será gasto de combustível para realizar esta viagem.

const precoGasolina = 5.79; // const porque durante a executação do programa o preço do combustível não muda.
const precoEtanol = 4.79;
const precoDiesel = 4.29;
var gastoMedioKm = 6;
var distanciaKm = 580.1;
var tipoCombustivel = 'diesel'; // 'etanol' ou 'gasolina'

// var valorGasto = (distanciaKm / gastoMedioKm) * precoCombustivel;

if (tipoCombustivel === 'etanol') {
    var valorGasto = ((distanciaKm / gastoMedioKm) * precoEtanol).toFixed(2); // arredonda o valor para 2 casas decimais. Outro modo de fazer o arredondamento é direto no console.log: console.log(valorGasto.toFixed(2));
    console.log(`O valor gasto com combustível é R$${valorGasto} se abastecer com etanol.`);
} else if (tipoCombustivel === 'gasolina') {
    var valorGasto = ((distanciaKm / gastoMedioKm) * precoGasolina).toFixed(2); // arredonda o valor para 2 casas decimais. Outro modo de fazer o arredondamento é direto no console.log: console.log(valorGasto.toFixed(2));
    console.log(`O valor gasto com combustível é R$${valorGasto} se abastecer com gasolina.`);
} else if (tipoCombustivel === 'diesel') {
    var valorGasto = ((distanciaKm / gastoMedioKm) * precoDiesel).toFixed(2); // arredonda o valor para 2 casas decimais. Outro modo de fazer o arredondamento é direto no console.log: console.log(valorGasto.toFixed(2));
    console.log(`O valor gasto com combustível é R$${valorGasto} se abastecer com diesel.`);
} else {
    console.log('Tipo de combustível inválido');
};



