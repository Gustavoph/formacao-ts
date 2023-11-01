{
  interface Animal {
    nome: string
    idade: number
  }

  interface Cachorro extends Animal {
    raca: string
  }

  const cachorro: Cachorro = {
    nome: 'Porco',
    idade: 6,
    raca: 'Bulldog francês'
  }

  const animal: Animal = cachorro
  ;(animal as Cachorro).raca
}

{
  interface Animal {
    nome: string
    idade: number
  }

  interface Voador {
    voar(): void
  }

  interface Nadador {
    nadar(): void
  }

  interface Terrestre {
    andar(): void
  }

  interface Pato extends Animal, Voador, Nadador, Terrestre {
    cor: string
  }

  const donald: Pato = {
    nome: 'Donald',
    idade: 85,
    cor: 'Branco',
    voar: () => {},
    andar: () => {},
    nadar: () => {}
  }
}