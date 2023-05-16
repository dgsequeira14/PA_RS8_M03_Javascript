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

    let resultado2=pessoas.filter(pessoa => pessoa.localidade==="Coimbra");
    console.log(resultado2);

    let resultado3=[];
    for (let pessoa of pessoas) {
        if (pessoa.localidade==="Lisboa") {
            resultado3.push(pessoa);
        }
    }
    console.log(resultado3);

    let resultado4=pessoas.filter(pessoa => pessoa.nome.length===12);
    console.log(resultado4);

    let resultado5=pessoas.filter(pessoa => pessoa.nome.length===12 && pessoa.localidade==="Lisboa");
    console.log(resultado5);

    // chaining - encadear
    let resultado6=pessoas.filter(pessoa => pessoa.nome.length===12).filter(pessoa => pessoa.localidade==="Lisboa");
    console.log(resultado6);

    // mostrar apenas os nomes que têm 12 caracteres e vivem em Lisboa
    // ["Luísa Xavier", "Joana Castro"]
    let resultado7=pessoas.filter(pessoa => pessoa.nome.length===12 && pessoa.localidade==="Lisboa").map(pessoa => pessoa.nome);
    console.log(resultado7);

    const notas=[8, 15, 10, 13];
    const bonus=notas.map(nota => nota+2);
    console.log(bonus);

    // quantas notas negativas existem
    const notas3=[6, 15, 10, 8];
    const negativas=notas3.filter(nota => nota<10).length;
    console.log(negativas);

    // saber se existem notas negativas
    const notas4=[6, 15, 10, 8];
    const existeNegativas=(notas4.filter(nota => nota<10).length > 0) ;
    console.log(existeNegativas);

    const notas5=[6, 15, 10, 8];
    let existeNegativas2=false;
    for (let nota of notas5) {
        if (nota<10) {
            existeNegativas2=true;
            break;
        }
    };
    console.log(existeNegativas2);

    const existeNegativas3 = notas5.some(nota => nota<10);
    console.log(existeNegativas3);

    const notas6=[6, 5, 7, 8];
    const existeNegativas4 = !notas6.every(nota => nota>10);
    console.log(existeNegativas4);

    // apagar a primeira pessoa que vive em Lisboa -> porque o findIndex pára a procura quando encontra um elemento
    const indexPessoa=pessoas.findIndex(pessoa => pessoa.localidade==="Lisboa");
    const arrayFinal=pessoas.splice(indexPessoa,1);
    console.log(pessoas); 