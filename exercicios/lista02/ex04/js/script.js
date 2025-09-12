let n = parseInt(prompt("Digite um número: "))
let m = parseInt(prompt("Digite outro número: "))
let intervalo = m-n;

let numeroAleatorio = Math.floor(Math.random()*intervalo) + n+1;

document.write(`<p>${numeroAleatorio}</p>`);v