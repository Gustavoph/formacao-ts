{
  const names: string[] = ['Gustavo', 'Oliveira']
  const idade: Array<number> = [21, 21]

  const anys: any[] = [1, true, 'string', undefined]
  const arrays: string[][] = [['a', 'b']]
  const generics: Array<Array<string>> = [['a', 'b'], ['a']]
}

{
  const array: (string | number)[] = [1, 'a']
  const readonly: readonly string[] = ['a', 'b']
  type StringOrNumber = (string | number)[]
  const arr: StringOrNumber = [1, 'a']
}
