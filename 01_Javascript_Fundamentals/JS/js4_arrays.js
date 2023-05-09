let alunos = ["Andreia", "Pedro", "David", "Hugo"];
console.log(alunos[0]);
console.log(alunos);

alunos [4] = "Rúben";
console.log(alunos);

alunos[alunos.length] = "Gonçalo";
console.log(alunos);

alunos.push("João Pedro");
console.log(alunos);

alunos.push("João Pedro", "João Silva", "José Ferraz");
console.log(alunos);


// copiar um array
let alunosCorrentes = alunos.slice(0);
console.log("Alunos Correntes: " +alunosCorrentes);

alunos.push("Remoaldo");

console.log(alunosCorrentes);
console.table(alunosCorrentes);

let alunosCorrentes2 = [...alunos]; 
console.log("Alunos Correntes: " +alunosCorrentes2);


// Dado um array de temperaturas
// Calcular a temp min, max e media

let temperaturas = [19, 23, 12, 9, -3, 34];

let max = Math.max(...temperaturas);
let min = Math.min(...temperaturas);
let mean = temperaturas.reduce((a,b) => a + b) / temperaturas.length;

console.log(max);
console.log(min);
console.log(mean.toFixed(2));


// array multidimensionais
let dados = [
    ["Pedro", "Ermesinde", [919999999, 929999999]],
    ["Andreia", "Valongo"],
    ["José", "Esposende"],
];

console.log(dados[0][1]);
console.log(dados[0][2][0]);
dados.push(["Ruben", "Gaia"]);
console.table(dados);
console.log(dados[0]);

// literal object
let formador = {
    nome: "David Sequeira",
    localidade: "Guimarães",
    pais: "Portugal",
    contactos: {
        telefones: [99999999, 999999999],
        email: "ds@email.com"
    }
}

// let formando1 = {}

console.log(formador.nome);
console.log(formador["nome"]);
console.log(formador.contactos.telefones[1]);

let chave = "pais";
console.log(formador.chave); // undefined
console.log(formador[chave]); // Portugal

// array de objetos
let pessoas = [
    {nome: "Pedro Remoaldo", localidade: "Ermesinde"},
    {nome: "Andreia", localidade: "Valongo"},
    {nome: "José", localidade: "Esposende"},
    {nome: "Pedro Leite", localidade: "Gaia", idade: 25},
    {nome: "Luisa Todi", localidade: "Ermesinde"},
]

console.log(pessoas[0]);
console.log(pessoas[3].nome);

// criar uma função que lista as pessoas que moram numa localidade que é passada como parâmetro
// method signature

function filtraPorLocalidade (localidade) {
    let resultado = [];
    for (let pessoa of pessoas) {
        if (pessoa.localidade === localidade) {
            resultado.push(pessoa)
        }
    }
    return resultado;
    // return pessoas.filter(pessoa => pessoa.localidade === localidade);

}
console.log(filtraPorLocalidade("Ermesinde"));

// Função que mostra os nomes das pessoas que moram em Ermesinde, cujo nome comece por L

function filtraPorLocalidadeENome (localidade, inicial) {
    let resultado = [];

    for (let pessoa of pessoas) {
        if (pessoa.localidade === localidade && pessoa.nome.startsWith(inicial)) {
            resultado.push(pessoa)
        }
    }
    return resultado;
}

console.log(filtraPorLocalidadeENome("Ermesinde", "L"));


const formandos = ["Gonçalo", "Cleiber", "Pedro", "David"];
// formandos = ["Gonçalo", "Cleiber", "Pedro", "David", "Rúben"];  // Assignment to constant variable -> ERRO!
formandos.push("Rúben");    // acrescenta ao fim do array
formandos.unshift("Rúben");    // acrescenta ao início do array
console.log(formandos);

formandos.splice(3, 0, "Hugo");     // formandos.slice(posição_inserção, 0, valor(es) a inserir)    

console.log(formandos);

// remover elementos
let elementosRemovidos = formandos.splice(4,2);
console.log(formandos);
console.log(elementosRemovidos);

// alterar elementos
let elementosAlterados = formandos.splice(4, 1, "David");
console.log(formandos);
console.log(elementosAlterados);



