var pacientes = [];
function adicionar(){
    var inPaciente = document.getElementById("inPaciente")
    var outAgenda = document.getElementById("outAgenda")

    var nome = inPaciente.value

    if(nome == "" ){
        alert("Insira um nome!")
        return;
    }

    pacientes.push(nome);
    var lista ="";

    for (i=0; i < pacientes.length; i++){
        lista += (i + 1) + " ."+ pacientes [i] + "\n";
    }

        outAgenda.innerText = lista;
        inPaciente.value = ""
}

function urgencia(){
    var inPaciente = document.getElementById("inPaciente")
    var outAgenda = document.getElementById("outAgenda")

    var nome = inPaciente.value

    if(nome == ""){
        alert("Insira um nome!")
        return;
    }

    pacientes.unshift(nome);
    var lista ="";

    for (i=0; i < pacientes.length; i++){
        lista += (i + 1) + " ."+ pacientes [i] + "\n";
    }

        outAgenda.innerText = lista;
        inPaciente.value = ""
}

function atender(){
    if(pacientes.length==0){
        alert("Não há pacientes aguardando atendimento");
        return;
    }

    var emAtendimento = document.getElementById("emAtendimento");
    var outAgenda = document.getElementById("outAgenda");
    var atender = pacientes.shift();

    emAtendimento.innerText = atender;
    var lista ="";

    for (i=0; i < pacientes.length; i++){
        lista += (i + 1) + " ."+ pacientes [i] + "\n";
    }

    outAgenda.innerText = lista;
           

}