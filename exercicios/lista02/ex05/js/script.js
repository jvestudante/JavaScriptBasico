let quantidade = parseInt(prompt("Digite quantas pessoas são ao todo: "));
let vetorIdade = []; 
let vetorNome = [];  
let totalIdade = 0;

for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}° pessoa: `);
    let idade = parseInt(prompt(`Digite a idade da ${i + 1}° pessoa: `));
    vetorIdade.push(idade);
    vetorNome.push(nome);
    totalIdade += idade;  
}

let numeroAleatorio = Math.floor(Math.random() * quantidade);

alert(`Média idade: ${totalIdade / quantidade} anos`);
alert(`Nome sorteado: ${vetorNome[numeroAleatorio]}`);
