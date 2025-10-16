window.addEventListener('DOMContentLoaded', function(){
    const CartasTotal = 27;

    function main (){
        let cartas = [];
        let cartasDoJogo = [];

        criarCartas(cartas);
        cartasDoJogo = sorteioCartasJogo([...cartas],4)
        cartasDoJogo = embaralharCartas(cartasDoJogo);
        mostraCartas([...cartasDoJogo])
    }

    function LimparTabuleiro(){
        document.getElementById("tabuleiro").innerHTML = "";
    }


    function criarCartas (cartas){
        for (let i=0; i<CartasTotal; i++)
             cartas.push(i+1)
    }

    function sorteioCartasJogo(cartasClone, dificuldade){
        let novoVetor = [];

        for (let i=0; i<dificuldade; i++){
            indice = Math.floor(Math.random()*cartasClone.length);
            novoVetor.push(cartasClone[indice], cartasClone[indice])
            cartasClone.splice(indice, 1);
        }
        return novoVetor;
    }

    function embaralharCartas(cartas){
        let cartasClone = [...cartas];
        let vetEmbaralhado = [];
        for (let i=0; i<cartas.length; i++) {
            indice = Math.floor(Math.random()*cartasClone.length);
            vetEmbaralhado.push(cartasClone[indice]);
            cartasClone.splice(indice,1);
        }
        return vetEmbaralhado;
    }

    function mostraCartas(cartas){
        for (let i=0; i<cartas.length; i++){
            let imagem = new Image();
            imagem.src =  `img/carta${cartas[i]}.png`;
            document.getElementById("tabuleiro").appendChild(imagem);

        }
    }

    main();
    

});