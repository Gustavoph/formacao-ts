{
  function somar(a: number, b: number): number {
    return a + b;
  }

  function foo<T> (a: T, b: T): T {
    return a;
  }

  // Retorno implicito (o mais usado)
  function bar (message: string) {
    return message;
  }
}
{
    // Funções nomeadas
    // Function Declarations
    function foo (a: number): void {}

    // named function expressions
    const soma = function somar(a: number, b: number): void {}

    // Funções anonimas
    const sum = function (a: number, b: number): void{}

    // Arrow functions
    const arrow = (a: number, b: number) => {}

    // Shorthand arrow function expressions
    const shortSum = (a: number, b: number) => a + b

    // IIFE - Immediately invoked function expression
    ;(function (){})()
    ;(() => {})()

    // Constructors (não usar)
    const dynamicSum = new Function('a', 'b', 'return a + b')
    dynamicSum(1, 2)
}
{
  // Parametro opcinal
  function foo (a: number, b?: number) {}

  // Não tipar parâmetros opcionais
  function def (a: number, b: number = 10) {}
  function def2 (a: number, b = 10) {}
}

{
  function fooVariadic (...args: number[]) {}
  fooVariadic(1, 2, 3, 4, 5, 6)

  function fooArray (args: number[]) {}
  fooArray([1, 2, 3, 4, 5, 6])

  // Rest parameter deve ser sempre o ultimo, e não pode mais de 1
  function x (x: number, ...args: number[]) {}
}

{
  // Call signature
  interface Foo {
    fn: (a: number, b: number) => number
  }

  type MyFoo = (a: number, b: number) => number

  const foo: MyFoo = (a, b) => a+ b
}
