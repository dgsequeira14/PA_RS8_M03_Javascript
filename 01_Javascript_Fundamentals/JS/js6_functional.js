let pessoas=[
    { nome: "Pedro Remoaldo", localidade: "Ermesinde" },
    { nome: "Luísa Xavier", localidade: "Lisboa"},
    { nome: "Mário Simões", localidade: "Aveiro"},
    { nome: "Elisabete Miguel", localidade: "Braga"},
    { nome: "Joana Castro", localidade: "Lisboa"},
    { nome: "Guilherme Silveira", localidade: "Lisboa"},
    { nome: "Micaela Rodrigues", localidade: "Braga"},
    { nome: "Pedro Oliveira", localidade: "Ermesinde"}
]

let resultado=pessoas.filter(pessoa => pessoa.localidade==="Lisboa");
console.log(resultado);
let resultado2=pessoas.filter(pessoa => pessoa.localidade==="Coimbra"); // []
console.log(resultado2);

let resultado3=pessoas.filter(function(pessoa) {
    if (pessoa.localidade==="Lisboa") {
        return true;
    } else {
        return false;
    }
});
console.log(resultado3);
let resultado4=pessoas.filter(function(pessoa) {
    return pessoa.localidade==="Lisboa";
});
console.log(resultado4);

let resultado5=[];
for (let pessoa of pessoas) {
    if (pessoa.localidade==="Lisboa") {
        resultado5.push(pessoa);
    }
}
console.log(resultado5);

// filtrar os nomes que têm 12 caracteres
let resultado6=pessoas.filter(pessoa => pessoa.nome.length===12);
console.log(resultado6);

// filtrar os nomes que têm 12 caracteres e que vivem em Lisboa
let resultado7=pessoas.filter(pessoa => pessoa.nome.length===12 && pessoa.localidade==="Lisboa");
console.log(resultado7);

// chaining
let resultado8=pessoas.filter(pessoa => pessoa.nome.length===12).filter(pessoa => pessoa.localidade==="Lisboa");
console.log(resultado8);

// mostrar apenas os nomes que têm 12 caracteres e que vivem em Lisboa
// ['Luísa Xavier', 'Joana Castro']
let resultado9=pessoas.filter(pessoa => pessoa.nome.length===12 && pessoa.localidade==="Lisboa").map(pessoa => pessoa.nome);
console.log(resultado9);

// chaining com métodos de strings
console.log("Pedro Remoaldo".toUpperCase().split('').reverse().join(''));

const notas=[8, 15, 10, 13];
const bonus=notas.map(nota => nota+2);
console.log(bonus); // [10, 17, 12, 15]

// mostrar apenas as notas negativas após o bónus
const notas2=[6, 15, 10, 13];
const negAposBonus=notas2.map(nota => nota+2).filter(nota => nota<10);
console.log(negAposBonus); // [8]

// quantas notas negativas existem
const notas3=[6, 15, 10, 8];
const totalNotasNegativas=notas3.filter(nota => nota<10).length;
console.log(totalNotasNegativas);

// saber se existem notas negativas (true ou false)
// const notas4=[6, 15, 10, 8];
const notas4=[16, 15, 10, 18];
// const notas4=[6, 5, 7, 8];
const existemNotasNegativas=(notas4.filter(nota => nota<10).length > 0)
console.log(existemNotasNegativas);

let existemNotasNegativas2=false;
for (let nota of notas4) {
    if (nota<10) {
        existemNotasNegativas2=true;
        break;
    }
}
console.log(existemNotasNegativas2);

const existemNotasNegativas3=notas4.some(nota => nota<10);
console.log(existemNotasNegativas3);

// const existemNotasNegativas4=!notas4.every(nota => nota>10);
// console.log(existemNotasNegativas4);

// devolve a primeira ocorrência de um elemento que obedeça à condição
const existemNotasNegativas5 = (notas4.find(nota=>nota<10) !== undefined);
console.log(existemNotasNegativas5);

// devolve a posição da primeira ocorrência de um elemento que obedeça à condição
const existemNotasNegativas6 = (notas4.findIndex(nota=>nota<10) !== -1);
console.log(existemNotasNegativas6);

// apagar a pessoa com o nome "Micaela Rodrigues"

// const posicaoMicaela=pessoas.findIndex(pessoa => pessoa.nome==="Micaela Rodrigues");
// pessoas.splice(posicaoMicaela,1);
// console.log(pessoas);

pessoas=pessoas.filter(pessoa => pessoa.nome!=="Micaela Rodrigues")
console.log(pessoas);

// apagar todas as pessoas que vivem em Lisboa
// [
//     { nome: "Pedro Remoaldo", localidade: "Ermesinde" },
//     { nome: "Mário Simões", localidade: "Aveiro"},
//     { nome: "Elisabete Miguel", localidade: "Braga"},
//     { nome: "Micaela Rodrigues", localidade: "Braga"},
//     { nome: "Pedro Oliveira", localidade: "Ermesinde"}
// ]

// Mostrar o nome da última pessoa de Lisboa que foi registada no array "pessoas"
let ultimaPessoaRegistadaLisboa=[...pessoas].reverse().find(pessoa => pessoa.localidade==="Lisboa").nome;
console.log(ultimaPessoaRegistadaLisboa);
// console.log(ultimaPessoaRegistadaLisboa.nome);

let lastPerson = pessoas.filter(person => person.localidade === "Lisboa").pop().nome;
console.log(lastPerson);

let nome="";
for (let i=pessoas.length-1; i>=0; i--) {
    if (pessoas[i].localidade==="Lisboa") {
        nome=pessoas[i].nome;
        break;
    }
}
console.log(nome);

let ultimaLisboeta=pessoas.findLast(pessoa => pessoa.localidade==="Lisboa").nome;
console.log(ultimaLisboeta); // Guilherme Silveira

let temperaturas=[19,23,12,9,-3,34];
// obter o máximo das temperaturas
let tempMaxima=temperaturas.reduce((maximo,valorCorrente) => (valorCorrente > maximo) ? valorCorrente : maximo, -Infinity )
console.log(tempMaxima); // 34

let tempMaxima2=temperaturas.reduce(function (maximo,valorCorrente) {
    if (valorCorrente > maximo) {
        maximo=valorCorrente;
    }
    return maximo;
}, -Infinity);
console.log(tempMaxima2); // 34

// obter a soma das temperaturas
let somaTemperaturas=temperaturas.reduce((soma,valorCorrente) => soma + valorCorrente, 0)
console.log(somaTemperaturas); // 94

let soma2=0;
for (let valor of temperaturas) {
    soma2+=valor;
}
console.log(soma2);