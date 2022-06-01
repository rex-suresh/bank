class Account {
  #name; #id; #balance;
  constructor(name, id, balance = 0) {
    this.#name = name;
    this.#id = id;
    this.#balance = balance;
  };

  addAmount(amount) {
    this.#balance += amount;
    return { credit: amount, balance: this.#balance };
  };
  
  deductAmount(amount) {
    this.#balance -= amount;
    return { debit: amount, balance: this.#balance };
  };

  accountBalance() {
    return { balance: this.#balance };
  };

  isAmountAvailable(amount) {
    return amount <= this.#balance && this.isAccountActive();
  };

  isAccountActive() {
    return true;
  };

  equals(otherAccount) {
    return otherAccount instanceof Account &&
      this.#name === otherAccount.#name &&
      this.#id === otherAccount.#id &&
      this.#balance === otherAccount.#balance;
    };
}

exports.Account = Account;
