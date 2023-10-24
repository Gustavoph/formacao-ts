let nome: string | null

// Non-null assetion operator {nome!.toUpperCase() - BAD}
// optional chaining {nome?.toUpperCase() - BAD}
console.log(nome!.toUpperCase())
