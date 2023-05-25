class Cliente {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.saldo = 0;
  }
  depositar(quantia) {
    this.saldo += quantia;
  }
}
let cliente1 = new Cliente(1, "João");
console.log(cliente1.nome);

// class expression
let Pessoa = class {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.saldo = 0;
  }
  depositar(quantia) {
    this.saldo += quantia;
  }
};

// static property
class Utilizadores {
  static totalUtilizadores = 0;
  constructor(nome, localidade) {
    Utilizadores.totalUtilizadores++;
    this.nome = nome;
    this.localidade = localidade;
  }
}

let utilizador1 = new Utilizadores();
let utilizador2 = new Utilizadores();
console.log(Utilizadores.totalUtilizadores);

// Herança - inheritance

class Reformados extends Cliente {
  // herda tudo do pai excepto se forem propriedades private
  constructor(id, nome, localidade) {
    super(id, nome);
    this.localidade = localidade;
  }
  mostraNome() {
    console.log(this.nome);
  }
  // method override
  depositar(quantia) {
    this.saldo += quantia + quantia * 0.1;
  }
}

let reformado1 = new Reformados(3, "Carlos Lopes", "Lisboa");
console.log(reformado1.nome);
reformado1.mostraNome();
console.log(reformado1.localidade);


reformado1.depositar(500);
console.log(reformado1.saldo);
