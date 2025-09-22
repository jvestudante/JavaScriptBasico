const btnEntrar = document.getElementById("btnEntrar");
const login = document.getElementById("txtLogin");
const senha = document.getElementById("txtSenha");
const confirmarSenha = document.getElementById("txtConSenha");

btnEntrar.addEventListener("click", function () {
    if (login.value.trim() === "") {
        alert("Por favor, preencha o campo de login.");
    } else if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem.");
    } else {
        alert("Todos os campos foram preenchidos corretamente!");
    }
});
