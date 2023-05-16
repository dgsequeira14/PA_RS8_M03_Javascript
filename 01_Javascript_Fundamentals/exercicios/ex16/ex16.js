let listaOpcoes=document.querySelectorAll("#opcoes a");
let listaConteudos=document.querySelectorAll("#conteudos > section");
for (let opcao of listaOpcoes) {
    opcao.addEventListener("click", function() {
        this.classList.add("ativo");
        // remover a class ativo das outras opções
        let posicao=-1;
        for (let i=0; i<listaOpcoes.length; i++) {
            if (listaOpcoes[i] !== this) {
                listaOpcoes[i].classList.remove("ativo");
            } else {
                posicao=i;
            }
        }
        // mostrar o conteúdo respectivo e esconder os outros conteudos
        listaConteudos[posicao].style.display="block";
        for (let j=0; j<listaConteudos.length; j++) {
            if (j!==posicao) {
                listaConteudos[j].style.display="none";
            }
        }
    })
}