const vet = [];

//Preenchendo vetor
for (i=0; i<60; i++)
    vet[i] = i+1;

console.log(vet);

let sorteio = [];

for (i=0; i<6; i++){
    //sorteio de um índice
    let indiceVetor = Math.floor(Math.random()*vet.length)
    let numeroSorteado = vet[indiceVetor];
    //remover o número sorteado, evitando repetição.
    vet.splice(indiceVetor,1);
    //Adição de número sorteado ao vetor "sorteio"
    sorteio.push(numeroSorteado);
}

console.log(sorteio)

