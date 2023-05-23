let url = "http://localhost:3000/perfumes";

function mostraListaPerfumes(perfumes) {
  let conteudo = "";
  for (let perfume of perfumes) {
    conteudo += `<tr data-id="${perfume.id}">`;
    conteudo += `<td>${perfume.marca}</td>`;
    conteudo += `<td>${perfume.nome}</td>`;
    conteudo += `<td>€${perfume.preco.toFixed(2).replace(".", ",")}</td>`;
    conteudo += `<td>${perfume.destaque}</td>`;
    conteudo += `<td><button type="button" data-id="${perfume.id}" class="botaoDelete">X</button></td>`;
    conteudo += "</tr>";
  }

document.querySelector("#tabelaDados tbody").innerHTML = conteudo;
document.querySelector("#total").innerHTML = perfumes.length;
}

function lerTodosPerfumes(primeiraVez = false) {
  // default parameter = primeiraVez
  fetch(`${url}?`)
    .then(function (resposta) {
      if (resposta.ok) {
        return resposta.json();
      } else {
        return Promise.reject("Erro na recepção de dados!");
      }
    })
    .then((perfumes) => {
      mostraListaPerfumes(perfumes);
      if (primeiraVez) {
        let maximo = perfumes.reduce(
          (maximo, perfume) =>
            perfume.preco > maximo ? perfume.preco : maximo,
          0
        );
        document.querySelector("#valorMaximo").textContent = Math.ceil(maximo);
        document
          .querySelector("#precoMaximo")
          .setAttribute("max", Math.ceil(maximo));
        document
          .querySelector("#precoMaximo")
          .setAttribute("step", Math.floor(Math.ceil(maximo) / 10));
      }
    })
    .catch((erro) => {
      alert("Ocorreu um erro: " + erro);
    });
}

document.querySelector("#tabelaDados").addEventListener("click", function (e) {
  // if (e.target.nodeName==="BUTTON" && e.target.classList.contains("botaoDelete")) {
  if (e.target.classList.contains("botaoDelete")) {
    if (confirm("Pretende remover o perfume?")) {
      let id = e.target.getAttribute("data-id");

      fetch(`${url}/${id}`, { method: "DELETE" })
        .then(function (resposta) {
          if (resposta.ok) {
            return resposta.json();
          } else {
            return Promise.reject("Erro na recepção de dados!");
          }
        })
        .then(() => {
          lerTodosPerfumes();
          alert("Perfume eliminado!");
        })
        .catch((erro) => {
          console.log("Ocorreu um erro: " + erro);
        });
    }
  }
});

function inserePerfume() {
  let vmarca = document.querySelector("#marca").value;
  let vnome = document.querySelector("#nome").value;
  let vpreco = document.querySelector("#preco").value;
  let vdestaque;
  if (document.querySelector("#destaque").value === "S") {
    vdestaque = true;
  } else {
    vdestaque = false;
  }

  let novoPerfume = {
    marca: vmarca,
    nome: vnome,
    preco: vpreco,
    destaque: vdestaque,
  };

  // "application/json"
  // nome antigo - MIME type
  // novo nove - Internet Media Type
  // tipo_ficheiro/formato_ficheiro
  // image/png

  fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(novoPerfume),
  })
    .then(function (resposta) {
      if (resposta.ok) {
        return resposta.json();
      } else {
        return Promise.reject("Erro na recepção de dados!");
      }
    })
    .then((perfume) => {
      lerTodosPerfumes();
      document.querySelector("#marca").value = "";
      document.querySelector("#nome").value = "";
      document.querySelector("#preco").value = "";
      document.querySelector("#destaque").checked = false;
      alert("Perfume criado!");
    })
    .catch((erro) => {
      console.log("Ocorreu um erro: " + erro);
    });
}

function processaPesquisa() {
  let valorPesquisa = document.querySelector("#pesquisa").value;
  let opcoes = document.querySelectorAll("[name=filtro]");
  let precoSelecionado = document.querySelector("#precoMaximo").value;

  if (opcoes[0].checked || opcoes[1].checked) {
    let pesquisaPor = "";
    if (opcoes[0].checked) {
      // nome
      pesquisaPor = opcoes[0].value;
    } else if (opcoes[1].checked) {
      //marca
      pesquisaPor = opcoes[1].value;
    }
    // fetch(`${url}?${pesquisaPor}_like=${valorPesquisa}`)
    fetch(`${url}?${pesquisaPor}_like=${valorPesquisa}&preco_lte=${precoSelecionado}`)
      .then(function (resposta) {
        if (resposta.ok) {
          return resposta.json();
        } else {
          return Promise.reject("Erro na recepção de dados!");
        }
      })
      .then((perfumes) => {
        perfumes = perfumes.filter(
          (perfume) => perfume.preco <= precoSelecionado
        );
        mostraListaPerfumes(perfumes);
      })
      .catch((erro) => {
        alert("Ocorreu um erro: " + erro);
      });
  } else {
    alert("Tem de seleccionar um campo de pesquisa!");
  }
}

function limpaPesquisa() {
  lerTodosPerfumes();
  document.querySelector("#pesquisa").value = "";
}

function filtraPorPreco() {
  let precoMaximo = document.querySelector("#precoMaximo").value;
  processaPesquisa();
}

document
  .querySelector("#btInserePerfume")
  .addEventListener("click", inserePerfume);
document
  .querySelector("#btPesquisa")
  .addEventListener("click", processaPesquisa);

document
  .querySelector("#btLimpaPesquisa")
  .addEventListener("click", limpaPesquisa);

document
  .querySelector("#precoMaximo")
  .addEventListener("change", filtraPorPreco);

lerTodosPerfumes(true);
