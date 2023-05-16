// AJAX - Asynchronous JavaScript and XML
// XML - eXtensible Markup Language
// JSON - JavaScript Object Notation

console.log("Início");
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  // console.log(xhr.readyState);
  // 1 - Opened
  // 2 - Headers received
  // 3 - Loading
  // 4 - Done
  if (xhr.readyState === 4) {
    console.log("Resposta recebida");
    console.log(xhr.status);
    /*
        1xx - Informação
        2xx - Sucesso (200)
        3xx - Cache / Redirecionamento
        4xx - Erro do cliente / browser (404)
        5xx - Erro do servidor
        */
    switch (xhr.status) {
      case 200:
        console.log("Sucesso");
        // console.log(xhr.responseText);
        let posts=JSON.parse(xhr.responseText); // posts é um array
        let conteudo="";
        for (let post of posts) {
            // console.log(post.title);
            conteudo+='<tr>';
            conteudo+=`<td>${post.id}</td>`;
            conteudo+=`<td>${post.userId}</td>`;
            conteudo+=`<td>${post.title}</td>`;
            conteudo+=`<td>${post.body}</td>`;
            conteudo+='</tr>';
        }
        document.querySelector("#tabelaDados tbody").innerHTML=conteudo;
        document.querySelector("#total").innerHTML=posts.length;
        break;
      case 404:
        console.log("Page not found");
        break;
      default:
        console.log("Ocorreu um erro");
    }
  }
};
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
console.log("Fim");
