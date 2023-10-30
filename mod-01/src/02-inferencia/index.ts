{
  // inferencia dinamica
  let nome = 'Gustavo'
  let idade = 28
  let programmer = true

  function ola (nome: string): void {
    console.log(`Olá ${nome}`)
  }

  let arr = [1, 'Gustavo', true, null]

  // inferencia contextual
  const numeros = [1, 2, 3, 4]
  numeros.reduce((acc, num) => acc + num)

}
