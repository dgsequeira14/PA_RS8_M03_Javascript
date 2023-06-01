// DOM API - Document Object Model - Application Programming Interface
// API interna ao browser
// nodes / HTMLElement
// elementoAManipular.acção

/* Métodos para selecionar o elemento a manipular:

document.getElementById
document.getElementsByTagName   -> devolver um array de elemntos 
document.getElementsByName      -> devolver um array de elemntos
document.getElementsByClassName  -> devolver um array de elemntos
document.querySelector
document.querySelectorAll

*/

// devolve uma HTMLCollection
console.log(document.getElementsByTagName("h1"));
// devolve <h1>Teste de DOM</h1>
console.log(document.getElementsByTagName("h1")[0]);
// devolve "Teste de DOM"
console.log(document.getElementsByTagName("h1")[0].textContent);
document.getElementsByTagName("h1")[0].textContent = "Outro texto";

document.getElementsByTagName("h1")[0].innerHTML =
  "<strong><em>Outro texto &hearts;</em></strong>";
// &hearts; - HTML character code ou HTML entity

let elConteudo = document.getElementById("conteudo");
let elConteudoAnterior = elConteudo.textContent;
// Event Handler
document.getElementById("btMudaTexto").onclick = function () {
  // função anónima / callback

  if (elConteudo.textContent === "Novo conteúdo") {
    // Repor conteúdo
    elConteudo.textContent = elConteudoAnterior;
    elConteudo.classList.remove("destaque");
    // document.getElementById("btMudaTexto").textContent="Muda Texto";
    this.textContent = "Muda Texto"; // --> o this referencia sempre o evento, neste caso o evento click!!
  } else {
    document.getElementById("conteudo").textContent = "Novo conteúdo";

    // interagir com as CSS
    // elConteudo.style.color="red";
    // elConteudo.style.backgroundColor="cyan";

    // Sintaxe antiga
    // elConteudo.className="destaque";

    // Sintaxe nova
    // elConteudo.classList.add("destaque");
    document.getElementById("btMudaTexto").textContent = "Repõe Texto";
  }
  elConteudo.classList.toggle("destaque");
};

let elConteudoCollapse = document.getElementById("conteudoCollapse");
document.getElementById("btCollapse").onclick = function () {
  if (elConteudoCollapse.style.display === "block") {
    this.textContent = "Mostra Collapse";
    elConteudoCollapse.style.display = "none";
  } else {
    this.textContent = "Esconde Collapse";
    elConteudoCollapse.style.display = "block";
  }
};
