// Quando clico num título, mostrar o conteúdo respetivo, excepto se o conteúdo estiver visivel (neste caso, esconder o conteúdo)
// Event Listener
let titulos=document.querySelectorAll("#accordion > h2 ");
for (let titulo of titulos) {
    // console.log(titulo.textContent);
    titulo.addEventListener("click", function() {
        // console.log("Clicou");
        let elementoSeguinte=this.nextElementSibling
        let valorDisplayConteudo=window.getComputedStyle(elementoSeguinte).getPropertyValue("display");
        if (valorDisplayConteudo === "none") {
            elementoSeguinte.style.display="block";
        } else {
            elementoSeguinte.style.display="none";
        }
        // esconder os outros conteúdos
        for (let titulo2 of titulos) {
            if (titulo2 !== this) {
                titulo2.nextElementSibling.style.display="none";
            } 
        }
    })
}