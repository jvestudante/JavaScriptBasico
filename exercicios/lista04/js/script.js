const btnSorteio = document.getElementById("btnSorteio");


let candidatos = [{nome:"Simone Tebet", partido: "MDB", img: "imgSimone.png"},
                  {nome:"Luiz Inácio Lula da Silva", partido: "PT", img: "imgLula.png"}, 
                  {nome:"Ciro Gomes", partido: "PDT", img: "imgCiro.png"},
                  {nome: "Jair Messias Bolsonaro", partido: "PL", img: "imgJair.png"}
                ];

                
btnSorteio.addEventListener('click', function(){
    let percentual = Math.round(Math.random()*100);
    let vetPercentual = [percentual, 100-percentual];

    let candidatosFaltam = [...candidatos];
    let obj1 = candidatosFaltam.splice(Math.floor(Math.random()*candidatosFaltam.length),1)[0];
    let obj2 = candidatosFaltam.splice(Math.floor(Math.random()*candidatosFaltam.length),1)[0];
    objetos = [obj1, obj2];

    for (i=0; i<2; i++){
        mostraCand(objetos[i], i+1, vetPercentual[i])
    }
    mostraVencedor(obj1, obj2, vetPercentual);   
});

function mostraCand(obj, cand, percentual){
    document.getElementById(`candidatoSorteado${cand}`).innerHTML = obj.nome;
    document.getElementById(`partidoSorteado${cand}`).innerHTML = obj.partido;
    document.getElementById(`imgSorteada${cand}`).src = `img/${obj.img}`;
    document.getElementById(`percentualSorteado${cand}`).innerHTML = `${percentual.toFixed(2)}% dos Votos`;
}
function mostraVencedor(obj1, obj2, percentual){
    if (percentual[0]>percentual[1]){
        document.getElementById(`candidatoVencedor`).innerHTML = obj1.nome;
    }else if(percentual[0] == percentual[1]){
        document.getElementById(`candidatoVencedor`).innerHTML = "Empate";
    }
    else{
        document.getElementById(`candidatoVencedor`).innerHTML = obj2.nome;
    }
}

