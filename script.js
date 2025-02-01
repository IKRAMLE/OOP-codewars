class Account {
  constructor(accountHolder, accountNumber, balance = 0) {
      this.accountHolder = accountHolder;
      this.accountNumber = accountNumber;
      this.balance = balance;
  }

  deposit(amount) {
      this.balance += amount;
  }

  withdraw(amount) {
      if (this.balance >= amount) {
          this.balance -= amount;
      }
  }

  getBalance() {
      return this.balance;
  }
}

let account1 = new Account("Alice", "12345", 500);
let account2 = new Account("Bob", "67890", 1000);

account1.deposit(200);
account2.withdraw(500);

console.log(account1.getBalance());  
console.log(account2.getBalance());  
