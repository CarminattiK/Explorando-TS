// 1- Definição do tipo "Planetas", que representa um planeta com suas propriedades
// O planeta possui nome, coordenadas, situação e uma lista de satélites
type Planetas = {
  nome: string
  coordenadas: CoordenadasDosPlanetas
  situacao: SituacaoDosPlanetas
  satelites: string[]
}

// 2- Array criado conforme a dica no enunciado do desafio, onde os planetas registrados serão armazenados
let planetas: Planetas[] 

// 3- Definição do tipo para coordenadas, que consiste em um array com quatro números
type CoordenadasDosPlanetas = [number, number, number, number]

// 4- Definição do tipo para a situação do planeta, que pode assumir um dos quatro valores pré-definidos abaixo:
type SituacaoDosPlanetas = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

// 5- Função criada para salvar um novo planeta no array de planetas
function salvarPlaneta(nome: string, coordenadas: CoordenadasDosPlanetas, situacao: SituacaoDosPlanetas) {
    planetas.push({
      nome,
      coordenadas,
      situacao,
      satelites: []
    })
  
    alert(`Congratulations!! O planeta ${nome} foi salvo com sucesso.`)}

// 6- Função definida para encontrar um planeta pelo nome
function encontrarPlaneta(nome: string) {
        const planeta = planetas.find(planeta => planeta.nome === nome)

        return planeta
      }

// 7- Função com o propósito de atualizar a situação de um planeta
function atualizarSituacao(situacao: SituacaoDosPlanetas, planeta: Planetas) {
    planeta.situacao = situacao
    alert(`Atualizando a situação do planeta...`)
    alert(`A situação do planeta ${planeta.nome} foi atualizada para "${situacao}".`)
  }

// 8- Função para adicionar um satélite a um planeta
function adicionarSatelite(nome: string, planeta: Planetas) {
    planeta.satelites.push(nome)
    
    alert(`Satélite adicionado com sucesso!`)
    alert(`O satélite ${nome} foi adicionado ao planeta ${planeta.nome}.`)
  }
  
// 9- Ao contrário da função acima está serve para remover um satélite de um planeta  
  function removerSatelite(nome: string, planeta: Planetas) {
    planeta.satelites = planeta.satelites.filter(satelistes => satelistes !== nome)
  
    alert(`Satélite removido com sucesso!`)
    alert(`O satélite ${nome} foi removido do planeta ${planeta.nome}.`)
  }

// 10- Função para validar a situação de um planeta com base na entrada do usuário
function validadorDeSituacao() {
    let situacao: SituacaoDosPlanetas
    let validarSituacao = false
  
    while (!validarSituacao) {
      const situacaoEntrada = prompt('Por favor, informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')
  
      switch (situacaoEntrada) {
        case '1':
          situacao = 'Habitado'
          validarSituacao = true
          break;
        case '2':
          situacao = 'Habitável'
          validarSituacao = true
          break;
        case '3':
          situacao = 'Inabitável'
          validarSituacao = true
          break;
        case '4':
          situacao = 'Inexplorado'
          validarSituacao = true
          break;
        default:
          alert('Situação inexistente!')
          break;
      }
    }
  
    return situacao
  }

// 11- Função genérica para validar a existência de um planeta e executar um callback sobre ele
function validarPlaneta(callback: (planeta: Planetas) => void) {
    const nomeDoPlaneta = prompt('Por favor, insira o nome do planeta:')
    const planeta = encontrarPlaneta(nomeDoPlaneta)
  
    if (planeta) {
      callback(planeta)
    } else {
      alert('Houve um erro, planeta não encontrado! Retornando ao menu...')
    }
  }

// 12- Função para registrar um novo planeta solicitando os dados ao usuário
function primeiraOpcaoMenu() {
    const nome = prompt('Informe o nome do planeta:')
    const coordenadasA = Number(prompt('Informe a primeira coordenada:'))
    const coordenadasB = Number(prompt('Informe a segunda coordenada:'))
    const coordenadasC = Number(prompt('Informe a terceira coordenada:'))
    const coordenadasD = Number(prompt('Informe a quarta coordenada:'))
  
    const situacao = validadorDeSituacao()
  
    const confirmacao = confirm(`Por favor, Confirme o registro do planeta ${nome}?
    Coordenadas: (${coordenadasA}, ${coordenadasB}, ${coordenadasC}, ${coordenadasD})
    Situação: ${situacao}`)
  
    if (confirmacao) {
      salvarPlaneta(nome, [coordenadasA, coordenadasB, coordenadasC, coordenadasD], situacao)
    }
  }

// 13- Função para atualizar a situação de um planeta
function segundaOpcaoMenu() {
  validarPlaneta(planeta => {
    const situacao = validadorDeSituacao()
    atualizarSituacao(situacao, planeta)
  })
}

// 14- Função para adicionar um satélite a um planeta
function terceiraOpcaoMenu() {
  validarPlaneta(planeta => {
    const satelite = prompt('Informe o nome do satélite a ser adicionado:')
    adicionarSatelite(satelite, planeta)
  })
}

// 15- Função para remover um satélite de um planeta
function quartaOpcaoMenu() {
  validarPlaneta(planeta => {
    const satelite = prompt('Informe o nome do satélite a ser removido:')
    removerSatelite(satelite, planeta)
  })
}

// 16- Função para listar todos os planetas cadastrados
function quintaOpcaoMenu() {
  let lista = 'Planetas:\n'

  planetas.forEach(planeta => {
    const [a, b, c, d] = planeta.coordenadas

    lista += `
      Nome: ${planeta.nome}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planeta.situacao}
      Satélites: ${planeta.satelites.length}
    `

    planeta.satelites.forEach(satellite => {
      lista += `    - ${satellite}\n`
    })
  })

  alert(lista)
}