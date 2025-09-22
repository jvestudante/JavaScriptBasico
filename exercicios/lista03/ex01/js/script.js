const btnExibir = document.getElementById("btnExibir")
const txtNome = document.getElementById("txtNome")

btnExibir.addEventListener('click', function(){
    alert(txtNome.value);
})