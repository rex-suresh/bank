const assert = require('assert');
const { Account } = require('../src/Account.js');
const { Bank } = require('../src/bank.js');

describe( 'Bank', () => {
  it('should change two states when transfer invoked', () => {
    const account1 = new Account('a', 123, 100);
    const account2 = new Account('b', 234, 100);
    const bank = new Bank({ 123: account1, 234: account2 });

    bank.transfer(123, 234, 10);
    const newAccount1 = new Account('a', 123, 90);
    const newAccount2 = new Account('b', 234, 110);
    
    assert.ok(account1.equals(newAccount1) && account2.equals(newAccount2));
  });

  it('should change account state when debit invoked', () => {
    const account = new Account('a', 123, 1000);
    const bank = new Bank({ 123: account });

    bank.debit(123, 20);
    const newAccount = new Account('a', 123, 980);
    
    assert.ok(account.equals(newAccount));
  });

  it('should change account state when credit invoked', () => {
    const account = new Account('a', 123, 200);
    const bank = new Bank({ 123: account });

    bank.credit(123, 20);
    const newAccount = new Account('a', 123, 220);
    
    assert.ok(account.equals(newAccount));
  });
});