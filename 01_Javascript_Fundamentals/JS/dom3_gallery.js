
function processaClick() {
    // console.log(this.src);
    let ficheiro=this.getAttribute("src");
    document.querySelector(".imagemGrande").setAttribute("src", ficheiro);
    document.querySelector(".modal").style.display="flex"; 
    
    let titulo=this.getAttribute("title");
    console.log(titulo);
}

// Quando clicar numa imagem abre, quando clicar noutra imagem fecha a primeira e abre a segunda

let imagens=document.querySelectorAll("#gallery > img");
for (let imagem of imagens) {
    // callback
    imagem.addEventListener("click", processaClick);
}

// Quando clicar no botão fechar imagem

document.querySelector(".btFecha, .modal").addEventListener("click", function() {
    document.querySelector(".modal").style.display="none";  
} )

