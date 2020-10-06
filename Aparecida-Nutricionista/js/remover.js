var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", (event) => {
    //event.target = Alvo clicado
    //parentNode = Pai do Alvo clicado

    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(() => {
        event.target.parentNode.remove();
    },500);
})