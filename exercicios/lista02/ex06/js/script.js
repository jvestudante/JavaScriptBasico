alert("Bem vindo ao SORTEIO PREMIADO !!!")

let vetMegaSena = [];

for (let i = 0; i < 60; i++) {
    vetMegaSena.push(i + 1);
}

let numerosSorteados = [];

for (let i = 0; i < 6; i++) {
    let numeroAleatorio = Math.floor(Math.random() * vetMegaSena.length);
    let numero = vetMegaSena[numeroAleatorio];

    numerosSorteados.push(numero);
    vetMegaSena.splice(numeroAleatorio, 1);
}

alert("Números sorteados: " + numerosSorteados.join(", "));
