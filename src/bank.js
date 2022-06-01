class Bank {
  #accounts;
  constructor(accounts) {
    this.#accounts = accounts;
  };

  transfer(senderId, receiverId, amount) {
    const sender = this.#accounts[senderId];
    const receiver = this.#accounts[receiverId];

    if (sender.isAmountAvailable(amount)) {
      sender.deductAmount(amount);
      receiver.addAmount(amount);
      return {transfer: true, status: true, senderId, receiverId};
    }
    return {transfer: true, status: false, senderId, receiverId};
  };

  debit(accountId, amount) {
    const account = this.#accounts[accountId];

    if (account.isAmountAvailable(amount)) {
      account.deductAmount(amount);
      return {debit: true, status: true, accountId};
    }
    return {debit: true, status: false, accountId};
  };

  credit(accountId, amount) {
    const account = this.#accounts[accountId];

    if (account.isAccountActive()) {
      account.addAmount(amount);
      return {credit: true, status: true, accountId};
    }
    return {credit: true, status: false, accountId};
  };
}

exports.Bank = Bank;
