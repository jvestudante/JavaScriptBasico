

alert("BEM VINDO A CALCULA++PLUS ADVANCED")

main();

document.write("Obrigado por usar, até mais !!!")




function main() {
    let x = parseFloat(prompt(`Digite um número: `))
    let y = parseFloat(prompt(`Digite o outro: `))
    let operador = prompt(`Digite o operador (Exemplo: +, - , /, *)`)

    calculadora(x, y, operador)
}

function calculadora(x,y,operador) {
    switch(operador){
        case "+":
            return alert(`O resultado é: ${x+y}`);
            break;
        case "-":
            return alert(`O resultado é: ${x-y}`);
            break;
        case "*":
            return alert(`O resultado é: ${x*y}`);
            break;
        case "/":
            if (y == 0){
                return alert ("Não pode dividir por zero")
                break
            }
            return alert(`O resultado é: ${x/y}`);
        default:
            return alert ("Digite opções de operadores válidas")
            break;
    }

}

