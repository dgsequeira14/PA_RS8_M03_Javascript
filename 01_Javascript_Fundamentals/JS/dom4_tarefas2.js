let tarefas = [];
let elTarefa = document.querySelector("#tarefa");
document.querySelector("#formTarefas").addEventListener("submit", function (e) {
  let valor = elTarefa.value.trim();
  if (valor === "") {
    alert("Tem de especificar uma tarefa!");
  } else {
    if (
      !tarefas.find((tarefa) => tarefa.toUpperCase() === valor.toUpperCase())
    ) {
      document.querySelector(
        "#listaTarefas"
      ).innerHTML += `<li><span>${valor}</span><button type="button">X</button></li>`;

      
      tarefas.push(valor);
    } else {
      alert("A tarefa especificada já existe na lista.");
    }
  }
  elTarefa.value = "";
  elTarefa.focus();
  e.preventDefault();
});


// event delegation
document.querySelector("#listaTarefas").addEventListener("click", function (event) {
    console.log(event.target.nodeName);
    switch (event.target.nodeName) {
        case "SPAN":
            event.target.classList.toggle("efetuada");
            break;
        case "BUTTON":
            event.stopPropagation();
            event.target.parentElement.remove();
            let valorAApagar = event.target.previousElementSibling.textContent;
            let indexValorAApagar = tarefas.indexOf(valorAApagar);
            tarefas.splice(indexValorAApagar, 1);
            break;
        // default:    
    }
});