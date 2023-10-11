import { DioAccount } from './class/DioAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import {ChildrenAccount} from './class/ChildrenAccount'
 



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, 1000)
console.table(companyAccount)
companyAccount.deposit(60)
companyAccount.withdraw(40)
companyAccount.getLoan(100)

const peopleAccount: PeopleAccount = new PeopleAccount (33, 'Matheus Mallet', 1, 20)
console.table(peopleAccount)
peopleAccount.deposit(60)
peopleAccount.withdraw(40)
peopleAccount.getLoan(100)

const childrenAccount: ChildrenAccount = new ChildrenAccount ('Luca', 300, 10000)
console.table(childrenAccount)
childrenAccount.deposit(300)
childrenAccount.withdraw(200)
childrenAccount.getLoan(10)