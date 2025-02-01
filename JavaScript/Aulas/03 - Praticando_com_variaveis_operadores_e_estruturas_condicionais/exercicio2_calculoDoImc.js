/*
    O imc - Indice de  Massa corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dada a altura e o peso de uma pessoa, calcule o seu IMC e mostre a sua classificação conforme a tabela abaixo:

    IMC em adultos Condição:
    - Abaixo de 18,5: Abaixo do peso;
    - Entre 18,5 e 25: Peso normal;
    - Entre 25 e 30: Sobrepeso;
    - Entre 30 e 35: Obesidade grau 1;
    - Entre 35 e 40: Obesidade grau 2;
    - Acima de 40: Obesidade grau 3;

*/

const peso = 83;
const altura = 1.70;

const imc = peso / Math.pow(altura, 2);
console.log(`Seu imc é ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
} else if (imc >= 30 && imc < 35) {
    console.log('Obesidade grau 1');
} else if (imc >= 35 && imc < 40) {
    console.log('Obesidade grau 2');
} else {
    console.log('Obesidade grau 3');
}
