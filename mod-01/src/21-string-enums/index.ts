{
  enum State {
    SP = 'São Paulo',
    RJ = 'Rio de Janeiro',
    MG = 'Minas Gerais'
  }

  enum Direcao {
    CIMA = 'Cima',
    BAIXO = 'Baixo',
    ESQUERDA = 'Esquerda',
    DIRETA = 'Direta'
  }

  enum OutraDirecao {
    NORTE = Direcao.CIMA,
    SUL = Direcao.BAIXO,
    LESTE = Direcao.ESQUERDA,
    OESTES = Direcao.DIRETA
  }
}
