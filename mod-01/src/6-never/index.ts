{
  // never não pode receber nenhum tipo,
  // mas qualquer pode ser atribuido a ele

  let a: string = 'Gustavo'
  const b = 23
  let c: never = a

  // c = b -> não pode
  // c = null -> não pode
  // c = undefined -> não pode
  // c = c -> não pode
  // c = []-> não pode
  // c = void 0 -> não pode
  // c = 100n -> não pode

  const x  = c
  const o: string = c
}
