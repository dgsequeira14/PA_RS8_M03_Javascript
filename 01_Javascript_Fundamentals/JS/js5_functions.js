/*
    Definir funções
        - function declaration
        - function expression
        - constructor new Function()
*/

console.log(soma(3,7)); // 10

// function declaration
function soma(a, b) {
    return a + b;
}
// Declarar/importar as funções sempre no topo, ou antes de serem utilizadas
// hoisting - O JavaScript move as functions declarations para o topo do programa

// function expression
// Function expressions não fazem hoisting
// console.log(multiplicacao(4,3)); // Cannot access 'multiplicacao' before initialization
 
let multiplicacao = function (a,b) {
    // anonymous function
    return a * b;
}
console.log(multiplicacao(4,3));

// arrow functions
let multiplicacao2 = (a, b) => a * b;
console.log(multiplicacao2(4,5));
let dobro = numero => numero * 2;
console.log(dobro(4));


let alteraSting = valor => {
    let temp=valor.toUpperCase();
    return temp;
}
console.log(alteraSting("David"));

let mostraMensagem = () => console.log("Teste");
console.log(mostraMensagem());