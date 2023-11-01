{
  enum Direcao {
    NORTE,
    SUL,
    LESTE,
    OESTES
  }
}

{
  enum Direcao {
    NORTE = 'NORTE',
    SUL = 'SUL',
    LESTE = 'LESTE',
    OESTES = 'OESTES',
  }

  let direcao: Direcao = Direcao.NORTE
}

{
  enum Level {
    Info,
    Warn,
    Error,
    Debug
  }

  function createLogger(level: Level){
    switch(level) {
      case Level.Info:
        return console.log
      case Level.Warn:
        return console.warn
      case Level.Error:
        return console.error
      case Level.Debug:
        return console.debug
    }
  }
}
