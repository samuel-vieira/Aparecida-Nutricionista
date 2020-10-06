var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();//IMPORTANTE: o "event" deve ser passado como parâmetro

    var form = document.querySelector('#form-adiciona');
    var paciente = informacoesPaciente(form);

    var erros = validaPaciente(paciente);
    var ul = document.querySelector("#mensagens-erro");

    console.log(erros);

    if (erros.length > 0) {
        ul = apagaLi(ul);
        exibeMensagensErros(erros, ul);
        
        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();//limpar formulário
    ul = apagaLi(ul);//limpar ul com erros
})

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function exibeMensagensErros(erros, ul) {
    
    erros.forEach( (err) => {
        var li = document.createElement('li');
        li.textContent = err;
        ul.appendChild(li);
    });

}

function informacoesPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) erros.push("Peso Inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura Inválida");
    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");
    if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
    if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

    return erros;
}

function apagaLi(ul) {
    ul.innerHTML = "";

    return ul;
}