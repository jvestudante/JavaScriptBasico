// let valor = prompt("Digite um valor: ")
// alert(`Dobro = ${valor*2}`);

// let valor = prompt("Digite um valor: ")
// alert(`Dobro = ${valor*2}`);

// let valor = prompt("Digite um valor: ")
// alert(`Dobro = ${valor*2}`);


// suponhamos que tivemos utilizar esse bloco acima
// uso funcoes simplifica e deixa organizado e lógico o código

function dobro (){
    let valor = prompt("Digite um valor: ")
    alert(`Dobro = ${valor*2}`);
}

// agora podemos chama-la vária vezes durante o código

// dobro();
// dobro();
// dobro();

// podemos tambem faze-la com parametros

function dobroComParametro(numero){
    alert(`O dobro = ${numero}`)
}

dobroComParametro(10);
dobroComParametro(20);