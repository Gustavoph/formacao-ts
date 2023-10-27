{
  const tipo: any = 'oi'
  const tipo2 = tipo as string // explicit casting (usar esse)
  const tipo3 = <string>tipo // diamond operator (não usar)

  const literal = 'literal' as 'literal'
  const literal2 = 'literal' as const

  let tamanho: number = (tipo as string).length
}

{
  const naoSei: unknown = { a: 1, b: 'Outro valor' }
  ;(naoSei as { a: number, b: string })

  interface AlgumaCoisa {
    a: number
    b: string
  }

  ;(naoSei as AlgumaCoisa).a
}

{
  const a: string = 123 as unknown as string // usado mais em testes
}

{
  function isNumber (value: unknown) {
    return typeof value === 'number'
  }

  // diz que dentro da função o value será uma string
  function isString (value: unknown): value is string {
    return typeof value === 'string'
  }
}
  function assertNumber (value: unknown): asserts value is number {
    if (typeof value !== 'number') {
      throw new Error('Precisa ser um número')
    }

  }
  const valor: unknown =  123
  assertNumber(valor)
{

}
