// document.querySelector("#btInsere").addEventListener("click", function () {
//     console.log("teste");
// })

let elTarefa=document.querySelector("#tarefa");
document.querySelector("#formTarefas").addEventListener("submit", function (e) { // e, evt, event ou evento
    let valor=elTarefa.value.trim();
    if (valor==="") {
        alert("Tem de especificar uma tarefa!");
    } else {
        // document.querySelector("#listaTarefas").innerHTML+=`<li>${valor}</li>`;
        let novoElemento=document.createElement("li");
        let conteudo=document.createTextNode(valor);
        novoElemento.appendChild(conteudo);
        document.querySelector("#listaTarefas").appendChild(novoElemento);

    }
    elTarefa.value="";
    elTarefa.focus();
    e.preventDefault();

})
