const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const characters = [
    {nome: "Mario", velocidade: 4, manobrabilidade: 3, poder: 3},
    {nome: "Peach", velocidade: 3, manobrabilidade: 4, poder: 2},
    {nome: "Bowser", velocidade: 5, manobrabilidade: 2, poder: 5},
    {nome: "Luigi", velocidade: 3, manobrabilidade: 4, poder: 4},
    {nome: "Yoshi", velocidade: 2, manobrabilidade: 4, poder: 3},
    {nome: "Donkey Kong", velocidade: 2, manobrabilidade: 2, poder: 5}
]

console.log("Escolha o seu personagem: ")

characters.forEach((p, index) => {
    console.log(`${index + 1}. ${p.nome} (Força: ${p.poder}, Velocidade: ${p.velocidade}, Manobrabilidade: ${p.manobrabilidade})`)
});

let jogador1, jogador2;

let placarP1 = 0;
let placarP2 = 0;

const blocos = ["confronto", "curva", "reta"]

rl.question("Jogador1, escolha o número do seu personagem: ", (resposta1) => {
    jogador1 = characters[parseInt(resposta1) - 1]
    console.log(`O jogador1 escolheu jogar com: ${jogador1.nome}`)

    rl.question("Jogador2, escolha o número do seu personagem: ", (resposta2) => {
        jogador2 = characters[parseInt(resposta2) - 1]
        console.log(`O jogador2 escolheu jogar com: ${jogador2.nome}`)

    function pegarElementoRandom(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex]
    };  

    let totalP1, totalP2;

    for(let i = 0; i < 5; i++){
        const bloco = pegarElementoRandom(blocos);
        console.log(`Rodada ${i + 1}: o bloco é um(a) ${bloco}`);
        const dadoP1 = Math.floor(Math.random() * 6) + 1;
        const dadoP2 = Math.floor(Math.random() * 6) + 1;

        if (bloco === "confronto") {
            console.log(`${jogador1.nome} VS ${jogador2.nome}: CONFRONTO!`);
            totalP1 = dadoP1 + jogador1.poder;
            totalP2 = dadoP2 + jogador2.poder;
            
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            console.log(`Calculo dos Resultados\n${jogador1.nome}: Dado: ${dadoP1} + Poder: ${jogador1.poder} = ${dadoP1 + jogador1.poder}\n${jogador2.nome}: Dado: ${dadoP2} + Poder: ${jogador2.poder} = ${dadoP2 + jogador2.poder}`)
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

            if (totalP1 > totalP2) {
                if (placarP2 > 0) {
                    console.log(`${jogador1.nome} venceu o confronto! ${jogador2.nome} perdeu 1 ponto!`);
                    placarP2 -= 1;
                } else {
                    console.log(`${jogador1.nome} venceu o confronto! Mas ${jogador2.nome} já está com 0 ponto(s) e não pode perder mais!`);
                }
            } else if (totalP2 > totalP1) {
                if (placarP1 > 0) {
                    console.log(`${jogador2.nome} venceu o confronto! ${jogador1.nome} perdeu 1 ponto!`);
                    placarP1 -= 1;
                } else {
                    console.log(`${jogador2.nome} venceu o confronto! Mas ${jogador1.nome} já está com 0 ponto(s) e não pode perder mais!`);
                }
            } else {
                console.log(`${jogador1.nome} e ${jogador2.nome} empataram no confronto, ninguém perde pontos!`);
            }

            console.log("*************************")
            console.log(
                `PLACAR ATUAL\n${jogador1.nome}: ${placarP1} ponto(s)\n${jogador2.nome}: ${placarP2} ponto(s)`
            );
            console.log("*************************")

        } else if(bloco === "curva"){
            console.log(`${jogador1.nome} VS ${jogador2.nome}: CURVA!`);
            totalP1 = dadoP1 + jogador1.manobrabilidade;
            totalP2 = dadoP2 + jogador2.manobrabilidade;

            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            console.log(`Calculo dos Resultados\n${jogador1.nome}: Dado: ${dadoP1} + Manobrabilidade: ${jogador1.manobrabilidade} = ${dadoP1 + jogador1.manobrabilidade}\n${jogador2.nome}: Dado: ${dadoP2} + Manobrabilidade: ${jogador2.manobrabilidade} = ${dadoP2 + jogador2.manobrabilidade}`)
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        
            if(totalP1 > totalP2){
                console.log(`${jogador1.nome} fez uma curva superior a ${jogador2.nome}, ${jogador1.nome} ganha 1 ponto!`);
                placarP1+=1;
            }else if(totalP2 > totalP1){
                console.log(`${jogador2.nome} fez uma curva superior a ${jogador1.nome}, ${jogador2.nome} ganha 1 ponto!`);
                placarP2+=1;
            }else{
                console.log("Os dois jogadores empataram na curva, placar segue inalterado!")
            }

            console.log("*************************")
            console.log(
                `PLACAR ATUAL\n${jogador1.nome}: ${placarP1} ponto(s)\n${jogador2.nome}: ${placarP2} ponto(s)`
            );
            console.log("*************************")

        } else if(bloco === "reta"){
            console.log(`${jogador1.nome} VS ${jogador2.nome}: RETA!`);
            totalP1 = dadoP1 + jogador1.velocidade;
            totalP2 = dadoP2 + jogador2.velocidade;

            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            console.log(`Calculo dos Resultados\n${jogador1.nome}: Dado: ${dadoP1} + Velocidade: ${jogador1.velocidade} = ${dadoP1 + jogador1.velocidade}\n${jogador2.nome}: Dado: ${dadoP2} + Velocidade: ${jogador2.velocidade} = ${dadoP2 + jogador2.velocidade}`)
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

            if(totalP1 > totalP2){
                console.log(`${jogador1.nome} foi mais rápido na reta, ${jogador1.nome} ganha 1 ponto!`)
                placarP1+=1;
            }else if(totalP2 > totalP1){
                console.log(`${jogador2.nome} foi mais rápido na reta, ${jogador2.nome} ganha 1 ponto!`)
                placarP2+=1;
            }else{
                console.log("Os dois jogadores empataram na reta, placar segue inalterado!")
            }
            
            console.log("*************************")
            console.log(
                `PLACAR ATUAL\n${jogador1.nome}: ${placarP1} ponto(s)\n${jogador2.nome}: ${placarP2} ponto(s)`
            );
            console.log("*************************")
        }
    }

    if(placarP1 > placarP2){
        console.log("=================================")
        console.log(`PLACAR FINAL\n${jogador1.nome}: ${placarP1} PONTO(S)\n${jogador2.nome}: ${placarP2} PONTO(S)\nO vencedor foi: ${jogador1.nome}, parabéns!`)
        console.log("=================================")
    }else if(placarP2 > placarP1){
        console.log("=================================")
        console.log(`PLACAR FINAL\n${jogador1.nome}: ${placarP1} PONTO(S)\n${jogador2.nome}: ${placarP2} PONTO(S)\nO vencedor foi: ${jogador2.nome}, parabéns!`)
        console.log("=================================")
    }else{
        console.log("=================================")
        console.log(`PLACAR FINAL\n${jogador1.nome}: ${placarP1} PONTO(S)\n${jogador2.nome}: ${placarP2} PONTO(S)\nOs dois jogadores empataram, não houve vencedor!`)
        console.log("=================================")
    }
    
    rl.close();
    });
});
