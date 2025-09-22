const btn = document.getElementById("btn")
const bimestre1 = document.getElementById("1bimestre")
const bimestre2 = document.getElementById("2bimestre")

btn.addEventListener('click', function(){
    let soma = parseFloat(bimestre1.value) + parseFloat(bimestre2.value) 
    if (soma < 60)
        alert(`REPROVADO. Faltou ${60-soma} pontos.`)
    else
        alert(`APROVADO com aproveitamento de ${soma} pontos.`)
})