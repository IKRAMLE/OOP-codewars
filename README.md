**Exercise: Bank Account Management System**

**Objective:**
Create a simple Bank Account Management System using Object-Oriented Programming (OOP) principles in JavaScript. The system will allow the creation of accounts, depositing and withdrawing money, and checking the balance of an account.

**Requirements:**
**Account Class:**
Create a class called Account with the following properties:

accountHolder: The name of the account holder (string).
accountNumber: The unique account number (string).
balance: The balance of the account (number, default to 0).
The Account class should have the following methods:

deposit(amount): Add the given amount to the account's balance.
withdraw(amount): Subtract the given amount from the account's balance. (If there are insufficient funds, do nothing.)
getBalance(): Return the current balance of the account.
Usage:

Create at least two accounts with different account holders and balances.
Perform some deposits and withdrawals on these accounts.
Print the balance of each account after the operations.
Example:
Creating Accounts:

Alice has an account with the number "12345" and a balance of 500.
Bob has an account with the number "67890" and a balance of 1000.
Operations:

Deposit 200 into Alice's account.
Withdraw 500 from Bob's account.
Print the balances after the operations.
