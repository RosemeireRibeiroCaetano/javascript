const nomes = ['Mario', 'Márcia', 'Fernanda', 'Vera']

const media = [10,7,9,6]

const listaDeNotasEAlunos = [nomes,media]

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
    return listaDeNotasEAlunos[0][indice] + ', sua media é ' + 
    listaDeNotasEAlunos[1][indice]
  }else {
    return "Aluno não esta cadastrado"
  }
}

  console.log(exibeNomeNota("Márcia"))
