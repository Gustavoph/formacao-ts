{
  interface Pessoa {
    nome: string
    password: string
    readonly idade: number
  }

  interface Label {
    [name: string]: boolean
  }

  const labels: Label = {
    importante: true,
    pessoal: true
  }

  interface Multipla {
    titulo: string
    descricao: string
    date: Date
    done: boolean
    [outro: string]: string | Date | boolean
  }
}

{
  interface Pessoa {
    nome: string
    idade: number
  }

  const pessoa: Pessoa = {
    nome: 'Gustavo',
    idade: 21
  }
}