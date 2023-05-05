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