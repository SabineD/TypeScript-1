class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  public deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposit of funds: ${amount}`);
  }
  public withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw of funds: ${amount}`);
    } else {
      console.log("Insufficient funds.");
    }
  }
}
// Directe toegang tot 'balance' zou een fout veroorzaken:
// console.log(account1.balance); // Fout: Eigenschap 'balance' is privé en niet toegankelijk van buiten de klasse
