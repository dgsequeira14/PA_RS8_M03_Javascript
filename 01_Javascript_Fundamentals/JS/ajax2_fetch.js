// criar high-order function do Fetch
// let lista=[];
const modalDados = new bootstrap.Modal('#modalInfoPost');
function mostraArtigo(id) {
    document.querySelector("#fountainG").style.visibility="visible";
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function(resposta) {
            if (resposta.ok) {
                return resposta.json(); 
            } else {
                return Promise.reject("Erro na recepção de dados!");
            }
        })
        .then(post => {
            document.querySelector("#infoUserId").textContent=post.userId;
            document.querySelector("#infoTitle").textContent=post.title;
            document.querySelector("#infoBody").textContent=post.body;
            modalDados.show();
            document.querySelector("#fountainG").style.visibility="hidden";
        })
        .catch(erro => {
            alert("Ocorreu um erro: "+erro);
            document.querySelector("#fountainG").style.visibility="hidden";
        })
}

function mostraListaArtigos(posts,realce) { // recebe um array de objectos do tipo "post" e cria a tabela HTML com esses dados
    // Ocorreu um erro: TypeError: posts is not iterable
    // console.log(posts); // {}
    let conteudo="";
    for (let post of posts) {
        // console.log(post.title);
        conteudo+=`<tr data-id="${post.id}">`;
        // conteudo+=`<td>${post.id}</td>`;
        conteudo+=`<td>${post.userId}</td>`;
        conteudo+=`<td>${post.title}</td>`;
        if (realce !== undefined) {
            let realcado=post.body.replaceAll(realce,`<span class="destaque">${realce}</span>`)
            conteudo+=`<td>${realcado}</td>`;
        } else {
            conteudo+=`<td>${post.body}</td>`;
        }
        conteudo+='</tr>';
    }
    document.querySelector("#tabelaDados tbody").innerHTML=conteudo;
    document.querySelector("#total").innerHTML=posts.length;

    let linhas=document.querySelectorAll("#tabelaDados tbody tr");
    for (let linha of linhas) {
        linha.addEventListener("click", function() {
            // let id=this.firstElementChild.textContent;
            let id=this.getAttribute("data-id");
            // console.log(id);
            mostraArtigo(id);
        })
    }

    document.querySelector("#listaPosts").style.display="block";

}

function lePosts() {
    // Fetch API - Promises
    document.querySelector("#fountainG").style.visibility="visible";
    fetch('https://jsonplaceholder.typicode.com/posts')
        //   .then(response => response.json())
        .then(function(resposta) {
            // console.log(resposta);
            if (resposta.ok) { // status = 200
                return resposta.json(); // o método json() faz o parsing/conversão do JSON para um objecto JavaScript
            } else { // status = 404
                return Promise.reject("Erro na recepção de dados!");
            }
        })
        .then(posts => {
            mostraListaArtigos(posts);
            document.querySelector("#fountainG").style.visibility="hidden";
        })
        .catch(erro => {
            alert("Ocorreu um erro: "+erro);
            document.querySelector("#fountainG").style.visibility="hidden";
        })
}

document.querySelector("#btMostra").addEventListener("click", function() {   
    lePosts();
})

function processaPesquisa() {
    let valorPesquisa=document.querySelector("#pesquisa").value;
    // // console.log(valorPesquisa);
    // let linhas=document.querySelectorAll("#tabelaDados tbody tr");
    // for (let linha of linhas) {
    //     let colunaBody=linha.querySelectorAll("td")[2].textContent;
    //     if (!colunaBody.includes(valorPesquisa)) {
    //         linha.style.display="none";
    //     } else {
    //         linha.style.display="table-row";
    //     }
    // }
    document.querySelector("#fountainG").style.visibility="visible";
    fetch(`https://jsonplaceholder.typicode.com/posts?body_like=${valorPesquisa}`)
        .then(function(resposta) {
            // console.log(resposta);
            if (resposta.ok) { 
                return resposta.json();
            } else {
                return Promise.reject("Erro na recepção de dados!");
            }
        })
        .then(posts => {
            mostraListaArtigos(posts,valorPesquisa);
            // setTimeout('document.querySelector("#fountainG").style.visibility="hidden"',2000); // 2000ms
            document.querySelector("#fountainG").style.visibility="hidden";
        })
        .catch(erro => {
            alert("Ocorreu um erro: "+erro);
            document.querySelector("#fountainG").style.visibility="hidden";
        })
}
document.querySelector("#btPesquisa").addEventListener("click",processaPesquisa);
document.querySelector("#pesquisa").addEventListener("input",processaPesquisa);

function limpaPesquisa() {
    // let linhas=document.querySelectorAll("#tabelaDados tbody tr");
    // for (let linha of linhas) {
    //     linha.style.display="table-row";
    // }
    // document.querySelector("#pesquisa").value="";
    lePosts();
    document.querySelector("#pesquisa").value="";
}
document.querySelector("#btLimpaPesquisa").addEventListener("click",limpaPesquisa);

