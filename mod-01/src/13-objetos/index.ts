{
  // type aliases
  type Pessoa = {
    nome: string
    idade: number
    corFavorita: 'BLUE' | 'RED' | 'GREEN'
  }

  // Objeto literal
  const pessoa: Pessoa = {
    nome: 'Gustavo',
    idade: 21,
    corFavorita: 'BLUE'
  }

  const Giovanna: { nome: string, idade: number } = {
    nome: 'Giovanna',
    idade: 20
  }
}