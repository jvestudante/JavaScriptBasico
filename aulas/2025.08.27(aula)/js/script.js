const nome = prompt("Digite seu nome completo:")

const opcao = parseInt(prompt("Menu:" +
    "\n[1] Letras Maiúsculas" +
    "\n[2] Letras Minúsculas" +
    "\n[3] Primeira letra maiúscula" +
    "\n[4] Primeiro nome" +
    "\n[5] Primeiro nome maiúsculo e Último nome minúsculo" +
    "\n[6] Substitua o primeiro nome por um novo nome" +
    "\n[7] Primeira letra do primeiro nome e último nome maiúsculas" +
    "\n[8] Exiba as 3 primeiras letras do nome"));



switch (opcao) {
    case 1:
        document.write(`${nome.toUpperCase()}`);
        break;
    case 2:
        document.write(`${nome.toLowerCase()}`);
        break;
    case 3:
        document.write(`${nome.charAt(0).toUpperCase()} ${nome.slice(1).toLowerCase()}`);
        break;
    case 4:
        var nomes = nome.split(" ");
        document.write(`${nomes[0]}`);
        break;
    case 5:
        var nomes = nome.split(" ");
        document.write(`${nomes[0].toUpperCase()} ${nomes[nomes.length - 1].toLowerCase()}`);
        break;
    case 6:
        var nomes = nome.split(" ");
        nomes[0] = prompt("Digite o nome para substituir o anterior");
        var novoNome = nomes.join(" ");
        document.write(`${novoNome.toUpperCase()}`);
        break;
    case 7:
        var nomes = nome.split(" ");
        document.write(`${nomes[0].charAt(0).toUpperCase()} ${nomes[nomes.length - 1].toUpperCase()}`);
        break;
    case 8:
        var nomes = nome.split(" ");
        document.write(`${nomes[0].charAt(0)}${nomes[0].charAt(1)}${nomes[0].charAt(2)}`)
        break;
    default:
        alert("Digite um opção válida")
        break;

}