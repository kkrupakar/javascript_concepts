class BankAccont {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        console.log(`Total amount after depositing ${amount}`, this.balance);
    }

    withdrawal(amount) {
        this.balance = this.balance - amount;
        console.log(`Total amount after withdrawing ${amount}`, this.balance);
    }
}

class SavingAccount extends BankAccont {
    constructor(owner, balance, annualInterestRate) {
        super(owner, balance);
        this.annualInterestRate = annualInterestRate;
    }

    depositMonthlyInterest() {
        console.log('SavingAccount > depostiMonthlyInterest', this);
    }
}

class CheckingAccount extends BankAccont {
    constructor(owner, balance, insuffiecientFundsFee) {
        super(owner, balance);
        this.insuffiecientFundsFee = insuffiecientFundsFee;
    }

    processCheck(){
        console.log('CheckingAccount > processCheck',this);
    }
}