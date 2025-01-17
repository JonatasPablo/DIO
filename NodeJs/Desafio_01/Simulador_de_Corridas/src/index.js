// Importa o módulo readline para interagir com o terminal.
const readline = require('readline');

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

// Lista de jogadores disponíveis.
const players = [player1, player2, player3, player4, player5, player6];

// Cria a interface para interagir com o terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para selecionar os jogadores.
async function selectPlayers() {
    return new Promise((resolve) => {
        console.log('Selecione os jogadores pelo número correspondente:');
        players.forEach((player, index) => {
            console.log(`${index + 1}. ${player.NOME}`);
        });

        rl.question('Escolha o número do primeiro jogador: ', (answer1) => {
            rl.question('Escolha o número do segundo jogador: ', (answer2) => {
                const player1 = players[parseInt(answer1) - 1];
                const player2 = players[parseInt(answer2) - 1];

                if (!player1 || !player2 || player1 === player2) {
                    console.log('Escolha válida não detectada. Tente novamente.');
                    process.exit(1);
                }

                resolve([player1, player2]);
            });
        });
    });
}

// Função assíncrona para simular o lançamento de um dado, retornando um número aleatório de 1 a 6.
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Gera um número aleatório de 1 a 6.
}

// Função assíncrona para sortear o tipo de bloco: RETA, CURVA ou CONFRONTO.
async function getRandomBlock() {
    let random = Math.random(); // Gera um número aleatório entre 0 e 1.
    let result = '';

    // Define o tipo de bloco com base no número aleatório.
    switch (true) {
        case random < 0.33:
            result = 'RETA';
            break;
        case random < 0.66:
            result = 'CURVA';
            break;
        default:
            result = 'CONFRONTO';
            break;
    }
    return result; // Retorna o tipo de bloco sorteado.
}

// Função para exibir no console os resultados do dado e o atributo utilizado.
async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

// Função assíncrona para gerenciar a lógica da corrida entre dois personagens.
async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) { // Define 5 rodadas para a corrida.
        console.log(`\n 🏁 Rodada ${round} 🏁`); 

        // Sorteia o tipo de bloco para a rodada.
        let block = await getRandomBlock();
        console.log(`Bloco sorteado: ${block}`);

        // Rola os dados para cada personagem.
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Inicializa variáveis para os resultados das habilidades.
        let totalTesteSkill1 = 0;
        let totalTesteSkill2 = 0;

        // Se o bloco for RETA, utiliza o atributo VELOCIDADE.
        if (block === 'RETA') {
            totalTesteSkill1 = character1.VELOCIDADE + diceResult1;
            totalTesteSkill2 = character2.VELOCIDADE + diceResult2;
            await logRollResult(character1.NOME, 'Velocidade', diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, 'Velocidade', diceResult2, character2.VELOCIDADE);
        }

        // Se o bloco for CURVA, utiliza o atributo MANOBRABILIDADE.
        if (block === 'CURVA') {
            totalTesteSkill1 = character1.MANOBRABILIDADE + diceResult1;
            totalTesteSkill2 = character2.MANOBRABILIDADE + diceResult2;
            await logRollResult(character1.NOME, 'Manobrabilidade', diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, 'Manobrabilidade', diceResult2, character2.MANOBRABILIDADE);
        }

        // Se o bloco for CONFRONTO, utiliza o atributo PODER.
        if (block === 'CONFRONTO') {
            let powerResult1 = character1.PODER + diceResult1;
            let powerResult2 = character2.PODER + diceResult2;

            console.log(`${character1.NOME} confrontou ${character2.NOME}!🥊🥊`);
            await logRollResult(character1.NOME, 'Poder', diceResult1, character1.PODER);
            await logRollResult(character2.NOME, 'Poder', diceResult2, character2.PODER);

            // Determina o vencedor do confronto e ajusta os pontos.
            if (powerResult1 > powerResult2) {
                console.log(`${character1.NOME} 🏆 venceu o confronto! ${character2.NOME} 🐢 perdeu um ponto!`);
                character2.PONTOS = Math.max(0, character2.PONTOS - 1); // Garante que os pontos não fiquem negativos.
            } else if (powerResult2 > powerResult1) {
                console.log(`${character2.NOME} 🏆 venceu o confronto! ${character1.NOME} 🐢 perdeu um ponto!`);
                character1.PONTOS = Math.max(0, character1.PONTOS - 1); // Garante que os pontos não fiquem negativos.
            } else {
                console.log('Empate no confronto!');
            }
        }

        // Determina o vencedor da rodada com base no totalTesteSkill.
        if (totalTesteSkill1 > totalTesteSkill2) {
            console.log(`\n🏆 ${character1.NOME} marcou um ponto`);
            character1.PONTOS++;
            character2.PONTOS = Math.max(0, character2.PONTOS - 1); // Garante que os pontos não fiquem negativos.
        } else if (totalTesteSkill2 > totalTesteSkill1) {
            console.log(`\n🏆 ${character2.NOME} marcou um ponto`);
            character2.PONTOS++;
            character1.PONTOS = Math.max(0, character1.PONTOS - 1); // Garante que os pontos não fiquem negativos.
        }

        console.log('-------------------------------------------------------');
    }
}

// Função para declarar o vencedor ao final da corrida.
async function declareWinner(character1, character2) {
    console.log(`\n🏁🏆🏁 Resultado Final 🏁🏆🏁\n`);
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    // Determina quem é o vencedor ou se houve empate.
    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n🏆 ${character1.NOME} é o grande vencedor! 🏆`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n🏆 ${character2.NOME} é o grande vencedor! 🏆`);
    } else {
        console.log(`\n🏆 Empate! 🏆`);
    }
}

// Função principal que inicializa o jogo/corrida.
(async function main() {
    // Seleciona os jogadores através do terminal.
    const [selectedPlayer1, selectedPlayer2] = await selectPlayers();

    // Exibe uma mensagem no console indicando o início de uma corrida entre os dois jogadores selecionados.
    console.log(`🏁🚨... Corrida entre ${selectedPlayer1.NOME} e ${selectedPlayer2.NOME} começando ...🚨🏁`);

    // Executa a função `playRaceEngine` para simular a corrida entre os personagens selecionados.
    await playRaceEngine(selectedPlayer1, selectedPlayer2);

    // Declara o vencedor ao final da corrida.
    await declareWinner(selectedPlayer1, selectedPlayer2);

    // Encerra a interface do readline.
    rl.close();
})();
