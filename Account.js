const showMessage = ({ amount, balance }, transaction) =>
{
  if (transaction.balanceRequest) {
    return `Account balance is ${balance}`;
  }
  const status = transaction.credited ? 'Credited' : 'Debited';
  return `${status} amount ${amount}, balance ${balance}`;
};

class Account {
  constructor(name, age, openingBalance) {
    this.name = name;
    this.age = age;
    this.balance = openingBalance;
  };

  addAmount(amount) {
    this.balance += amount;
    return showMessage({ amount, balance: this.balance }, { credited: true });
  };

  deductAmount(amount) {
    this.balance -= amount;
    return showMessage({ amount, balance: this.balance }, { debited: true });
  };

  showBalance() {
    return showMessage({ balance: this.balance }, { balanceRequest: true });
  };
}

exports.Account = Account;
