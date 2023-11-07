import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { RiggedAccount } from "./class/RiggedAccount";

const peopleAccount: PeopleAccount = new PeopleAccount (1, 'Rafa', 14)

console.log(peopleAccount.getName())
peopleAccount.getBalance() 
peopleAccount.deposit(100) 
peopleAccount.getBalance()
peopleAccount.withdraw(20) 
peopleAccount.getBalance() 

const companyAccount: CompanyAccount = new CompanyAccount('Banco', 12)
console.log(companyAccount.getName())
companyAccount.getBalance()
companyAccount.deposit(1000)
companyAccount.getBalance()
companyAccount.getLoan(100)
companyAccount.getBalance()
companyAccount.withdraw(100)
companyAccount.getBalance()

const riggedAccount: RiggedAccount = new RiggedAccount ('Cleiton', 122)
console.log(riggedAccount.getName())
riggedAccount.getBalance()
riggedAccount.deposit(100)
riggedAccount.getBalance()
riggedAccount.withdraw(60)
riggedAccount.getBalance()