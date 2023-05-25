// OOP - Object-Oriented Programming
// classes

// JavaScript - prototype-based
// objectos

// existem muitos built-in objects
let mensagem = new String("Olá Pessoal");
console.log(mensagem.ToString);

let pessoa = {
  nome: "David Sequeira",
};

console.log(pessoa.nome);

let pessoa2 = new Object();
pessoa2.nome = "David Sequeira";

console.log(pessoa2.nome);

// singleton object types
// Math não pode ser instanciado
// let numeroAleatorio = new Math(); // Math is not a constructor
// numeroAleatorio.random();

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// criar um objecto vazio
let pessoa3 = {}; // objecto literal vazio
pessoa3.nome = "David Sequeira";
pessoa3.localidade = "Guimarães";
pessoa3.salario = 1000;
pessoa3.aumentar = function (valor) {
  this.salario += valor;
  return this.salario;
};

console.log(pessoa3.salario);
pessoa3.aumentar(200);
console.log(pessoa3.salario);

// utilizar constructors
const ContaBancaria = function (id, nome) {
  this.id = id;
  this.nome = nome;
  this.saldo = 0;
};
ContaBancaria.prototype

let cliente1 = new ContaBancaria(1, "David");
cliente1.saldo = 2000;
console.log(cliente1.saldo);