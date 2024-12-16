function BankAccount(owner,balance){
    this.owner = owner;
    this.balance = balance;
}
BankAccount.prototype.deposit = function(amount){
    this.balance = this.balance + amount;
    console.log(`Total amount after depositing ${amount}`,this.balance);
}

BankAccount.prototype.withdrawal = function(amount){
    this.balance = this.balance - amount;
    console.log(`Total amount after withdrawing ${amount}`,this.balance);
}

function SavingAccount(owner,balance,annualInterestRate){
   BankAccount.call(this,owner,balance);
   this.annualInterestRate = annualInterestRate;
}

SavingAccount.prototype = Object.create(BankAccount.prototype);
SavingAccount.prototype.constructor = BankAccount;
SavingAccount.prototype.depositMonthlyInterest = function(){
    console.log('SavingAccount > depostiMonthlyInterest',this);
}

function CheckingAccount(owner,balance,insuffiecientFundsFee){
    BankAccount.call(this,owner,balance);
    this.insuffiecientFundsFee = insuffiecientFundsFee;
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.constructor = BankAccount;
CheckingAccount.prototype.processCheck = function(){
    console.log('CheckingAccount > processCheck',this);
}