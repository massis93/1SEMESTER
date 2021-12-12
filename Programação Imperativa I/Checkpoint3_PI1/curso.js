const {Alunos, aluno1, aluno2} = require("./modulos")

let curso = {
  nomeDoCurso: 'Programação Imperativa',
  notaDeAprovacao: 6,
  faltasMaximas: 2,
  listaDeEstudantes: [aluno1, aluno2],
  adicionarEstudantes: function(nome, quantidadeFaltas, notas) {
    this.listaDeEstudantes.push(new Alunos(nome, quantidadeFaltas, notas))
  },   
  aprovacao: function(nomeAluno){
    let alunoSelecionado = nomeAluno
    for(let i in this.listaDeEstudantes) {
      if (nomeAluno === this.listaDeEstudantes[i].nome) {
        alunoSelecionado = this.listaDeEstudantes[i];
      }
    }
    const faltas = alunoSelecionado.quantidadeFaltas;
    const media = alunoSelecionado.calcularMedia();
    if ((faltas < this.faltasMaximas && media >= this.notaDeAprovacao) || (faltas === this.faltasMaximas && media >= this.notaDeAprovacao*1.1)) {
      return true;
    } else {
      return false
    } 
  },
  resultados: function(){
    let resultadoAlunos = [];
    for(let i in this.listaDeEstudantes){
      resultadoAlunos.push(this.aprovacao(this.listaDeEstudantes[i].nome))
    }
    return resultadoAlunos;
  }
}

curso.adicionarEstudantes("Cristiano", 3, [6,6,8]);
//console.log(curso.aprovacao('Cristiano'));
console.log(curso.resultados());

