function jogar() {
    const opcoes = ["Pedra", "Papel", "Tesoura"];

    let jogador1 = opcoes[Math.floor(Math.random() * opcoes.length)];
    let jogador2 = opcoes[Math.floor(Math.random() * opcoes.length)];

    document.write(`<p>Jogador 1 escolheu: ${jogador1}</p>`);
    document.write(`<p>Jogador 2 escolheu: ${jogador2}</p>`);

    let vencedor = determinarVencedor(jogador1, jogador2);

    document.write(vencedor);
}

function determinarVencedor(jogador1, jogador2) {
    if (jogador1 === jogador2) {
        return "Empate!";
    }

    if (
        (jogador1 === "Pedra" && jogador2 === "Tesoura") ||
        (jogador1 === "Papel" && jogador2 === "Pedra") ||
        (jogador1 === "Tesoura" && jogador2 === "Papel")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}

jogar();
