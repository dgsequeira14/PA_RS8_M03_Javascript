let tarefas=[];
// document.querySelector("#btInsere").addEventListener("click", function () {
//     console.log("teste");
// })

let elTarefa = document.querySelector("#tarefa");
document.querySelector("#formTarefas").addEventListener("submit", function (e) {
  // e, evt, event ou evento
  let valor = elTarefa.value.trim();
  if (valor === "") {
    alert("Tem de especificar uma tarefa!");
  } else {
    let existe=false;
    // let tarefas = document.querySelectorAll("#listaTarefas > li");
    // let existe = false; // flag
    // for (let tarefa of tarefas) {
    //   if (tarefa.textContent.toUpperCase() === valor.toUpperCase()) {
    //     existe = true;
    //     break;
    //   }
    // }
    // if (!existe) {
    if (!tarefas.find(tarefa => tarefa.toUpperCase()===valor.toUpperCase())) {
      

      // document.querySelector("#listaTarefas").innerHTML+=`<li>${valor}</li>`;
      let novoElemento = document.createElement("li");
      let conteudo = document.createTextNode(valor);
      novoElemento.appendChild(conteudo);
      let botao=document.createElement("button");
      botao.setAttribute("type", "button");
      let conteudoBotao=document.createTextNode("X");
      botao.appendChild(conteudoBotao);
      botao.addEventListener("click", function (e) {
        e.stopPropagation();
        this.parentElement.remove();
        let valorAApagar=this.previousSibling.textContent;
        let indexValorAApagar=tarefas.indexOf(valorAApagar);
        tarefas.splice(indexValorAApagar, 1);
      })
      
      novoElemento.appendChild(botao);

      novoElemento.addEventListener("click", function() {
        this.classList.toggle("efetuada");
      })
      document.querySelector("#listaTarefas").appendChild(novoElemento);
      tarefas.push(valor);
    } else {
        alert("A tarefa especificada já existe na lista.");
    }
  }
  elTarefa.value = "";
  elTarefa.focus();
  e.preventDefault();
});
