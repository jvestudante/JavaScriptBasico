const nomeCompleto = prompt("Digite seu nome completo")
const idade = parseInt(prompt("Digite sua idade"));

const idadeNecessaria = 18 - idade;

if (idade >= 18)
    alert(`${nomeCompleto}, você já POSSUI idade para tirar carteira.`)
else
    alert(`${nomeCompleto}, você ainda NÃO POSSUI idade para tirar a carteira, ainda falta(m) ${idadeNecessaria} anos.`)