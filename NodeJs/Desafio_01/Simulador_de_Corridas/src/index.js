// Define o objeto `player1` representando o personagem Mario, com atributos de velocidade, manobrabilidade, poder e pontos.
const player1 = {
    NOME: 'Mario',
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

// Define o objeto `player2` representando o personagem Luigi, com atributos de velocidade, manobrabilidade, poder e pontos.
const player2 = {
    NOME: 'Luigi',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

// Define o objeto `player3` representando o personagem Peach, com atributos de velocidade, manobrabilidade, poder e pontos.
const player3 = {
    NOME: 'Peach',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};

// Define o objeto `player4` representando o personagem Yoshi, com atributos de velocidade, manobrabilidade, poder e pontos.
const player4 = {
    NOME: 'Yoshi',
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};

// Define o objeto `player5` representando o personagem Bowser, com atributos de velocidade, manobrabilidade, poder e pontos.
const player5 = {
    NOME: 'Bowser',
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

// Define o objeto `player6` representando o personagem Donkey Kong, com atributos de velocidade, manobrabilidade, poder e pontos.
const player6 = {
    NOME: 'Donkey Kong',
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

// Função assíncrona para simular o lançamento de um dado, retornando um número aleatório de 1 a 6.
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função assíncrona (placeholder) para gerenciar a lógica da corrida entre dois personagens.
async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);
    }
};

// Função principal que inicializa o jogo/corrida.
(async function main() {
    // Exibe uma mensagem no console indicando o início de uma corrida entre dois personagens (Mario e Luigi neste caso).
    console.log(`🏁🚨... Corrida entre ${player1.NOME} e ${player2.NOME} começando ...🚨🏁 \n`);

    // Executa a função `playRaceEngine` para simular a corrida entre os personagens Mario e Luigi.
    await playRaceEngine(player1, player2);
})();
