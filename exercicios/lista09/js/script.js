window.addEventListener('DOMContentLoaded', function() {

    let nascimentoTxt = document.getElementById("nascimentoTxt");
    let cpfTxt = document.getElementById("cpfTxt");
    let matriculaTxt = document.getElementById("matriculaTxt");
    let cdgDisciplinaTxt = document.getElementById("cdgDisciplinaTxt");
    let cdgDisciplinaTxt2 = document.getElementById("cdgDisciplinaTxt2");
    let cdgDisciplinaTxt3 = document.getElementById("cdgDisciplinaTxt3");
    let cdgDisciplinaTxt4 = document.getElementById("cdgDisciplinaTxt4");
    let campusTxt = document.getElementById("campusTxt");
    let foneTxt = document.getElementById("foneTxt");
    let foneTxt2 = document.getElementById("foneTxt2");
    let alturaTxt = document.getElementById("alturaTxt");
    let faturamentoTxt = document.getElementById("faturamentoTxt");
    let cronometroTxt = document.getElementById("cronometroTxt");
    let senhaTxt = document.getElementById("senhaTxt");


    document.getElementById("btnNascimento").addEventListener('click', function() {
        let padrao = /^\d{2}\/\d{2}\/\d{4}|\d{2}\/\d{2}\/\d{2}$/;
        validar(padrao, nascimentoTxt);
    });

    document.getElementById("btnCpf").addEventListener('click', function() {
        let padrao = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        validar(padrao, cpfTxt);
    });

    document.getElementById("btnMatricula").addEventListener('click', function() {
        let padrao = /^(IFTM|iftm)\-\d{3}\/\d{3}\-\w{2}$/;
        validar(padrao, matriculaTxt);
    });

    document.getElementById("btnCdgDisciplina").addEventListener('click', function() {
        let padrao = /^MT\-\d{2}\.\d{3}\-IFTM$/i;
        validar(padrao, cdgDisciplinaTxt);
    });

    document.getElementById("btnCdgDisciplina2").addEventListener('click', function() {
        let padrao = /^MT\-\d{2}\.\d{3}\-[Ii][Ff][Tt][Mm]$/;
        validar(padrao, cdgDisciplinaTxt2);
    });

    document.getElementById("btnCdgDisciplina3").addEventListener('click', function() {
        let padrao = /^M\s?T\-\d{2}\.\d{3}\-I\s?F\s?T\s?M$/i;
        validar(padrao, cdgDisciplinaTxt3);
    });

    document.getElementById("btnCdgDisciplina4").addEventListener('click', function() {
        let padrao = /^[Mm]\s?[Tt]\-\d{2}\.\d{3}\-[Ii]\s?[Ff]\s?[Tt]\s?[Mm]\-Uberlândia|Uberlândia centro$/;
        validar(padrao, cdgDisciplinaTxt4);
    });

    document.getElementById("btnCampus").addEventListener('click', function() {
        let padrao = /^(IFTM campus Uberlândia)|(IFTM campus Uberlândia Centro)$/;
        validar(padrao, campusTxt);
    });

    document.getElementById("btnFone").addEventListener('click', function() {
        let padrao = /^\+\d{2}\(\d{2}\)\d{5}\-\d{4}$/;
        validar(padrao, foneTxt);
    });

    document.getElementById("btnFone2").addEventListener('click', function() {
        let padrao = /^\((\d{2}|\d{3})\)\d{5}\-\d{4}$/;
        validar(padrao, foneTxt2);
    });

    document.getElementById("btnAltura").addEventListener('click', function() {
        let padrao = /^(1[\.\,][3456789]\d?)|(2[\.\,][012345]\d?)$/;
        validar(padrao, alturaTxt);
    });

    document.getElementById("btnFaturamento").addEventListener('click', function() {
        let padrao = /^R\$(\d{3}\.)?(\d{3}\.)?(\d{3}\.)?(\d{2})?\d,\d{2}$/;
        validar(padrao, faturamentoTxt);
    });

    document.getElementById("btnCronometro").addEventListener('click', function() {
        let padrao = /^([01]\d:[01345]\d:[012345]\d:\d{2})|(2[0123]:[01345]\d:[012345]\d:\d{2})$/;
        validar(padrao, cronometroTxt);
    });

    document.getElementById("btnSenha").addEventListener('click', function() {
        let padrao = /^\w{5,}[\.-\_]&[A-p]*\.[aeiou]*(\.[A-z0-5]*)?-\D*\,\W{2}\.[C-z2-9]*$/;
        validar(padrao, senhaTxt);
    });


    function validar(padrao, infoTxt){
        padrao.test(infoTxt.value) ? alert("Válido") : alert("Inválido");
    }

});