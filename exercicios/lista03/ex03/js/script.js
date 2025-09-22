const btn = document.getElementById("btn");
const txtValor = document.getElementById("txtValor");
const txtDobro = document.getElementById("txtDobro");

btn.addEventListener('click', function() {
    if (txtValor.value.trim() === "") {
        alert("Digite um valor");
    } else {
        txtDobro.value = txtValor.value * 2;
    }
});
