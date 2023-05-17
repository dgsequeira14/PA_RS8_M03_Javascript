const modalDados = new bootstrap.Modal("#modalInfoPost");

/* FUNCTIONS */
function mostraArtigo(id) {
  document.querySelector("#fountainG").style.visibility = "visible";
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(function (resposta) {
      if (resposta.ok) {
        return resposta.json();
      } else {
        return Promise.reject("Erro na receção de dados!");
      }
    })
    .then((post) => {
      document.querySelector("#infoUserId").textContent = post.userId;
      document.querySelector("#infoTitle").textContent = post.title;
      document.querySelector("#infoBody").textContent = post.body;
      modalDados.show();
      document.querySelector("#fountainG").style.visibility = "hidden";
    })
    .catch((erro) => {
      alert("Ocorreu um erro: " + erro);
      document.querySelector("#fountainG").style.visibility = "hidden";
    });
}

function mostraListaArtigos(posts) {
   // Ocorreu um erro: TypeError: posts is not iterable
      // console.log(posts); // {} - empty object
      let conteudo = "";
      for (let post of posts) {
        // console.log(post.title);
        conteudo += `<tr data-id=${post.id}>`;
        // conteudo += `<td>${post.id}</td>`;
        conteudo += `<td>${post.userId}</td>`;
        conteudo += `<td>${post.title}</td>`;
        conteudo += `<td>${post.body}</td>`;
        conteudo += "</tr>";
      }
      document.querySelector("#tabelaDados tbody").innerHTML = conteudo;
      document.querySelector("#total").innerHTML = posts.length;

      let linhas = document.querySelectorAll("#tabelaDados tbody tr");
      for (let linha of linhas) {
        linha.addEventListener("click", function () {
          // let id=this.firstElementChild.textContent;
          let id = this.getAttribute("data-id");
          console.log(id);
          mostraArtigo(id);
})
      }}

/* EVENTS */

document.querySelector("#btMostra").addEventListener("click", function () {
  document.querySelector("#fountainG").style.visibility = "visible";
  //  Fetch API - Promises
  fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())  // converte a response que recebe em json
    .then(function (resposta) {
      console.log(resposta);
      if (resposta.ok) {
        // status = 200
        return resposta.json(); // o método json  () faz o parsing/conversão dço JSON para um objeto JavaScript
      } else {
        // status = 404
        return Promise.reject("Erro na receção de dados!");
      }
    })
    .then((posts) => {
        mostraListaArtigos(posts);
        });
      document.querySelector("#listaPosts").style.display = "block";
    })
    .catch((erro) => {
      alert("Ocorreu um erro: " + erro);
    })
  

function processaPesquisa() {
  let valorPesquisa = document.querySelector("#pesquisa").value;
  // console.log(valorPesquisa);
  let linhas = document.querySelectorAll("#tabelaDados tbody tr");
  for (let linha of linhas) {
    let colunaBody = linha.querySelectorAll("td")[2].textContent;
    if (!colunaBody.includes(valorPesquisa)) {
      linha.style.display = "none";
    } else {
      linha.style.display = "table-row";
    }
  }
}

document.querySelector("#btPesquisa").addEventListener("click", processaPesquisa);

function limpaPesquisa() {
  let linhas = document.querySelectorAll("#tabelaDados tbody tr");
  for (let linha of linhas) {
    linha.style.display = "table-row";
  }
  document.querySelector("#pesquisa").value="";
}

document.querySelector("#btLimpaPesquisa").addEventListener("click", limpaPesquisa);
