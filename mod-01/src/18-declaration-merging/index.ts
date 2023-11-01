{
  // Interfaces são abertas (uma vez declarada, pode ser modificada) - BAD
  // Types são fechadas (uma vez declarada, não pode ser modificada)
  interface Pessoa {
    nome: string
  }

  interface Pessoa {
    idade: number
  }

  const pessoa: Pessoa = {
    idade: 21,
    nome: 'Gustavo'
  }
}