export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number 
    private status: boolean = true
  
    constructor(name: string, accountNumber: number, balance: number){
      this.name = name
      this.accountNumber = accountNumber
      this.balance = balance
    }
  
    getName = (): string => {
      return this.name
    }
  
    deposit = ( value:number ): void => {
      if(this.validateStatus()){
        this.setBalance(this.getBalance() + value)
        console.log(`Emprestimo Realizado com sucesso. Seu novo saldo é ${this.getBalance()}`)
      }
    }
  
    withdraw = (value: number): void  => {
      if (this.validateStatus() && this.getBalance() - value < 0){
        return console.log('Saldo Insuficiente!')
      }
      this.setBalance(this.getBalance() - value);
      console.log(`Saque realizado com sucesso no valor de ${value}. Agora seu saldo atual é ${this.getBalance()}`)
    } 
  
    setBalance = (value: number): void => {
      this.balance = value;
    }
  
    getBalance = (): number => {
      return this.balance
    }
  
    getLoan = (value: number): void => {
     if(this.validateStatus()){
      this.setBalance(this.getBalance() + value)
      console.log(`Emprestimo Realizado com sucesso. Seu novo saldo é ${this.getBalance()}`)
     }
    }
  
    profitDeposit = () => {
  
    }
  
  
    protected validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }
  }