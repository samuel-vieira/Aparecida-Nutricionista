var botaoAdicioar = document.querySelector('#buscar-pacientes');

botaoAdicioar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//configurando endereço de onde está a api

    xhr.addEventListener("load", function (){

        if(xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach( function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.statusText);
            alert("Ocorreu um erro ao buscar os pacientes. Tente Novamente");
        }
       
    });

    xhr.send();//captura a resposta da API
})