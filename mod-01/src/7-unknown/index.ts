{
  // unknown pode receber qualquer tipo,
  // mas nenhum tipo já atribuido pode ser ele

  let a: string = 'Gustavo'
  const b = 23
  let c: unknown = a

  c = b
  c = null
  c = undefined
  c = c
  c = []
  c = void 0
  c = 100n

  const x  = c
  // const o: string = c -> não pode
}
