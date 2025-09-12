let numero = parseInt(prompt("Digite um número: "))
let numeroAleatorio = Math.floor(Math.random()*numero) + numero+1;

document.write(`<p>${numeroAleatorio}</p>`);v