
let vetor = [10,20,30,40,50];
let contador = 0;


// while
while(true){
    if (contador > vetor.length -1)
        break;
    console.log(vetor[contador])
    contador++;
}

// for ... in
for (i in vetor)
    console.log(vetor[i])
