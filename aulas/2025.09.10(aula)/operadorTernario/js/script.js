let numero = parseInt(prompt("Digite o número: "))
let vet = [10,58,7,33,14,9]

console.log(retorno(vet, numero));

function retorno(vetor, qualuer){
    return (vetor.indexOf(qualuer)!= -1)?true:false;
}