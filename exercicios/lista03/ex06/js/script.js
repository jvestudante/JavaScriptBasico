const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const btnSoma = document.getElementById("btnSoma");
const btnSub = document.getElementById("btnSub");
const btnMult = document.getElementById("btnMult");
const btnDiv = document.getElementById("btnDiv");
const txtResultado = document.getElementById("txtResultado");

btnSoma.addEventListener('click', function() {
    if (valor1.value.trim() == "" || valor2.value.trim() == "") {
        alert("Preencha os campos vazios !");
    } else {
        txtResultado.value = parseFloat(valor1.value) + parseFloat(valor2.value);
    }
});

btnSub.addEventListener('click', function() {
    if (valor1.value.trim() == "" || valor2.value.trim() == "") {
        alert("Preencha os campos vazios !");
    } else {
        txtResultado.value = parseFloat(valor1.value) - parseFloat(valor2.value);
    }
});

btnMult.addEventListener('click', function() {
    if (valor1.value.trim() == "" || valor2.value.trim() == "") {
        alert("Preencha os campos vazios !");
    } else {
        txtResultado.value = parseFloat(valor1.value) * parseFloat(valor2.value);
    }
});

btnDiv.addEventListener('click', function() {
    if (valor1.value.trim() == "" || valor2.value.trim() == "") {
        alert("Preencha os campos vazios !");
    } else {
        if (parseFloat(valor2.value) === 0) { 
            alert("Não pode dividir por zero");
        } else {
            let divisao = parseFloat(valor1.value) / parseFloat(valor2.value);
            txtResultado.value = divisao;
        }
    }
});
