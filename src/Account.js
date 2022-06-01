const showMessage = ({ amount, balance }, transaction) =>
{
  if (transaction.balanceRequest) {
    return `Account balance is ${balance}`;
  }
  const status = transaction.credited ? 'Credited' : 'Debited';
  return `${status} amount ${amount}, balance ${balance}`;
};

class Account {
  constructor(name, age, openingBalance = 0) {
    this.name = name;
    this.age = age;
    this.balance = openingBalance;
  };

  addAmount(amount) {
    this.balance += amount;
    return { credit: amount, balance: this.balance };
  // return showMessage({ amount, balance: this.balance }, { credited: true });
  };
  
  deductAmount(amount) {
    this.balance -= amount;
    return { debit: amount, balance: this.balance };
  // return showMessage({ amount, balance: this.balance }, { debited: true });
  };

  accountBalance() {
    return { balance: this.balance };
  // return showMessage({ balance: this.balance }, { balanceRequest: true });
  };

  areStatesEqual(otherAccount) {
    for (const state in this) {
      if (this[state] !== otherAccount[state]) {
        return false;
      }
    }
    return true;
  };

  equals(otherAccount) {
    return otherAccount instanceof Account &&
      this.areStatesEqual(otherAccount);
  };
}

exports.Account = Account;
