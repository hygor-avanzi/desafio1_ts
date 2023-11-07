export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit(depositAmount: number): void {
    if (depositAmount <= 0)
      throw new Error('Valor de deposito invalido')
    else if (this.validateStatus()) {
      this.balance += depositAmount
      console.log('Dinheiro depositado com sucesso')
    }
  }

  withdraw = (withdrawAmount: number): void => {
    if (this.validateStatus()){
      this.balance -= withdrawAmount
      console.log(`Valor de ${withdrawAmount} sacado com sucesso!`)

    } else if (withdrawAmount <= 0) {
      throw new Error ('Valor de Saque Inválido')

    } else if (!this.validateStatus()){
      throw new Error ('Conta Inválida')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
