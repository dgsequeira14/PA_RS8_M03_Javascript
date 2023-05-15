let nomes=["Gonçalo", "Pedro", "José", "João"];
let arrayParaRemover=["Pedro"];

function removeElementos(nomes, arrayParaRemover){
    let arrayFinal=[];

    for (let nome of nomes) {
        if(!arrayParaRemover.includes(nome)) {
            arrayFinal.push(nome);
        };
    };
    return arrayFinal;
};

console.log(removeElementos(nomes, arrayParaRemover));