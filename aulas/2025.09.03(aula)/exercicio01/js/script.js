const jogador1 = ["pedra", "papel", "tesoura"]
const jogador2 = ["pedra", "papel", "tesoura"]


let indiceSorteioJog1 = Math.floor(Math.random() * 3);
let indiceSorteioJog2 = Math.floor(Math.random() * 3);

document.write(`<p>Jogador 1 = ${jogador1[indiceSorteioJog1]}<br>Jogador 2 = ${jogador2[indiceSorteioJog2]}</p>`);

if (indiceSorteioJog1 == 0 && indiceSorteioJog2 == 1)
    document.write("Jogador 2 vence a partida")

if (indiceSorteioJog1 == 0 && indiceSorteioJog2 == 2)
    document.write("Jogador 1 vence a partida")

if (indiceSorteioJog1 == 1 && indiceSorteioJog2 == 0)
    document.write("Jogador 1 vence a partida")

if (indiceSorteioJog1 == 1 && indiceSorteioJog2 == 2)
    document.write("Jogador 2 vence a partida")

if (indiceSorteioJog1 == 2 && indiceSorteioJog2 == 0)
    document.write("Jogador 1 vence a partida")

if (indiceSorteioJog1 == 2 && indiceSorteioJog2 == 1)
    document.write("Jogador 2 vence a partida")

if (indiceSorteioJog1 == indiceSorteioJog2)
    document.write("Empate. De novo !!!")

