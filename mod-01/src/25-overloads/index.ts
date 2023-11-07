{
  interface LogMessage {
    message: string
    userId: number
  }

  enum LogLevel {
    INFO = 'info',
    ERROR = 'error',
  }

  type LogFunction = {
    (message: string, userId: number, level: LogLevel): void
    (message: LogMessage, level: LogLevel): void
  }

  const log: LogFunction = (message: string | LogMessage, userIdOrLevel: number | LogLevel, level?: LogLevel) => {
    //  implementation
  }

  log('mensagem', 1, LogLevel.INFO)
  log({ message: 'mensagem', userId: 1 }, LogLevel.ERROR)

  function LogFunctionNamed (message: string, userId: number, level: LogLevel) {}
  function LogFunctionNamed (message: LogMessage, level: LogLevel) {}
  function LogFunctionNamed (message: unknown, userIdOrLevel: unknown, level?: unknown) {
    // primeiro overload
    if (typeof message === 'string' && typeof userIdOrLevel === 'number' && level) {
      console.log(`Mensagem: ${message}, userId: ${userIdOrLevel}, level: ${level}`)
    } else {
      function assertMessage (message: unknown): asserts message is LogMessage {
        if (!message || typeof message !== 'object' || !['userId', 'message'].every(key => key in message)){
          throw new Error('Mensagem inválida')
        }
      }

      function assertLevel (level: unknown): asserts level is LogLevel {
        if (!level || typeof level !== 'string' || !Object.values(LogLevel).includes(level as any)) {
          throw new Error('Level inválido')
        }
      }

      assertLevel(level)
      assertMessage(message)
      console.log(`Mensagem: ${message.message}, userId: ${message.userId}, level: ${level}`)
    }
  }

  LogFunctionNamed('mensagem', 1, LogLevel.INFO)
}
