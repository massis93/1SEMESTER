/* Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

 */

function Alunos(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    
    this.calcularMedia = function(){
      let media = 0;
      for (let i in this.notas){
        media += this.notas[i];
      }
      return media / notas.length;
    }
    this.faltas = function (){
      this.quantidadeFaltas ++
    }
}

const aluno1 = new Alunos("Mateo", 6, [5, 6, 8]);
const aluno2 = new Alunos("Lionel", 2, [10, 8, 7]);

module.exports = {Alunos, aluno1, aluno2};


// passo 3: Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

// passo 4: Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

// passo 5: Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

// passo 6: Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 


