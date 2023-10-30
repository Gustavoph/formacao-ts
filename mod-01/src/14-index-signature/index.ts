{
  type ToDoDict = {
    titulo: string
    description: string
    labels: {
      [name: string]: boolean
    }
  }

  const todo: ToDoDict = {
    titulo: 'Ir ao mercado',
    description: 'Tomar notas',
    labels: {
      urgente: true
    }
  }
}