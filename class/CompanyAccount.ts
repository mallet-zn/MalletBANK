import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, balance: number){
    super(name, accountNumber, balance)
  }
  
  getLoan = (value: number): void => {
    if(this.validateStatus()){
     this.setBalance(this.getBalance() + value + (value * 10) / 100)
     console.log(`Emprestimo Realizado com sucesso. Seu novo saldo é ${this.getBalance()}`)
    }
   }
}
