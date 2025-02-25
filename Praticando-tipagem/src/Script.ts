let naves = []

function salvarNave(nome: string, piloto: string, tamanhoMaxTripulacao: number) {
    const espacoNave = {
        nome,
        piloto,
        tamanhoMaxTripulacao,
        tripulacao: [],
        emMissao: false
    }
    const confirmacao = confirm(`Você tem certeza que deseja salvar a nave a seguir:
        Nome: ${espacoNave.nome}
        Piloto: ${espacoNave.piloto}
        Tamanho Máximo da tripulação: ${espacoNave.tamanhoMaxTripulacao}
        Tripulantes: ${espacoNave.tripulacao}
        Se encontra em missão? ${espacoNave.emMissao}`)

        if(confirmacao) {
            naves.push(espacoNave)
            alert(`Sua nave foi salva com sucesso!`)
        }

    return espacoNave
};

function encontrarNave(nome: string) {
    let espacoNave: {
        nome: string,
        piloto: string,
        tamanhoMaxTripulacao: number,
        tripulacao: string[],
        emMissao: boolean
    }
    espacoNave = naves.find((nave) => {
        return nave.nome === nome
    })
    return espacoNave
    
}

function addNovoMembro(membro: string, espacoNave: { nome: string, tamanhoMaxTripulacao: number, tripulacao: string[] }) {
    if (espacoNave.tripulacao.length >= espacoNave.tamanhoMaxTripulacao) {
      alert(`ERROR! ${membro} não pode ser adicionado à tripulação. O limite de membros foi atingido.`)
    } else {
      espacoNave.tripulacao.push(membro);
    
      alert(`${membro} foi adicionado à tripulação da ${espacoNave.nome} com sucesso!!`)
    }
}

function enviarParaMissao(espacoNave: { nome: string, tamanhoMaxTripulacao: number, tripulacao: string[], emMissao: boolean }) {
  if (espacoNave.emMissao) {
    alert(`Ocorreu um erro! ${espacoNave.nome} não pode ser enviada. A nave já está em missão.`)
  } else if (espacoNave.tripulacao.length < Math.floor(espacoNave.tamanhoMaxTripulacao / 3)) {
    alert(`Ocorreu um erro! ${espacoNave.nome} não pode ser enviada. A tripulação já atingiu seu limite máximo!.`)
  } else {
    espacoNave.emMissao = true

    alert(`A(o) ${espacoNave.nome} foi enviada para a missão, com sucesso!`)
  }
}

function primeiraOpcaoDoMenu() {
  const nome = prompt('Qual nome você gostaria de colocar na nave??')
  const piloto = prompt(`Qual seria o nome do(a) piloto(a) da ${nome}`)
  const tamanhoMaxTripulacao = Number.parseInt(prompt(`Qual tamanho máximo de tripulantes da ${nome}?`))

  const confirmacao = confirm(`Confirme se o dados de registro da nave conferem ${nome}?\nPiloto: ${piloto}\nTamanho da Tripulação: ${tamanhoMaxTripulacao}`)

  if (confirmacao) {
    salvarNave(nome, piloto, tamanhoMaxTripulacao)
  }
}

function segundaOpcaoDoMenu() {
    const membro = prompt('Qual é o nome do tripulante?')
    const nomeDaNave = prompt(`Para qual nave ${membro} deverá ser designado?`)
  
    const espacoNave = encontrarNave(nomeDaNave)
  
    if (espacoNave) {
      const confirmacao = confirm(`Confirma a inclusão de ${membro} na tripulação da ${espacoNave.nome}?`)
  
      if (confirmacao) {
        addNovoMembro(membro, espacoNave)
      }
    }
  }

  function terceiraOpcaoDoMenu() {
    const nomeDaNave = prompt('Qual é o nome da nave a ser enviada?')
  
    const espacoNave = encontrarNave(nomeDaNave);
  
    if (espacoNave) {
      const confirmacao = confirm(`Confirma e envio da ${espacoNave.nome} na missão?`)
  
      if (confirmacao) {
        enviarParaMissao(espacoNave)
      }
    }
  }

  function quartaOpcaoDoMenu() {
    let lista = 'Naves Registradas:\n'
  
    naves.forEach((espacoNave: {
      nome: string,
      piloto: string,
      tamanhoMaxTripulacao: number,
      tripulacao: string[],
      emMissao: boolean
    }) => {
      lista += `
        Nave: ${espacoNave.nome}
        Piloto: ${espacoNave.piloto}
        Em missão? ${espacoNave.emMissao ? 'Sim' : 'Não'}
        Tamanho Máximo da Triuplação: ${espacoNave.tamanhoMaxTripulacao}
        Tripulantes: ${espacoNave.tripulacao.length}
      `
  
      espacoNave.tripulacao.forEach(membro => {
        lista += `    - ${membro}\n`
      })
  
    })
  
    alert(lista)
  }

let opcoesDeUsuario = 0;

while (opcoesDeUsuario !== 5) {
  const menu = `Painel Principal
    1 - Salvar uma nova nave
    2 - Adicionar um novo membro à tripulação
    3 - Enviar nave em uma missão
    4 - Listar todas as naves registradas
    5 - Encerrar
  `

  opcoesDeUsuario = Number.parseInt(prompt(menu))

  switch (opcoesDeUsuario) {
    case 1:
      primeiraOpcaoDoMenu()
      break
    case 2:
      segundaOpcaoDoMenu()
      break
    case 3:
      terceiraOpcaoDoMenu()
      break
    case 4:
      quartaOpcaoDoMenu()
      break
    case 5:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}