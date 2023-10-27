{
  // Usar PascalCase para nomear
  // Esse tipo é simples e por ser derivado de um tipo simples
  // o typescript irá inferir como string e não MeuTipo
  type MeuTipo = string

  function foo (x: MeuTipo) {
    return x
  }

  // Esse tipo é considerado complexo
  type NullableString = string | null

  function sayHello(name: NullableString) {
    if (name) {
      console.log(name)
      return name
    }
  }

  type Nullable<T> = T | null
  function sayHi(name: Nullable<string>) {
    if (name) {
      console.log(name)
      return name
    }
  }


  type User = {
    name: string
    age?: number
  }

  const objeto: User = { name: 'Gustavo' }
  const user: User = { name: 'Giovanna' }

  // NÃO FAZER ISSO
  type A = string
  type B = number
  type C = undefined
  type D = A | B | C
}
