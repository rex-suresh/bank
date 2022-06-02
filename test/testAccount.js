const assert = require('assert');
const {Account} = require('../src/Account.js');

describe('Account', () => {
  it( 'Should add amount,(change amount state), when added', () => {
    const account = new Account('suresh', 10, 0);
    const otherAccount = new Account('suresh', 10, 200);
    const report = account.addAmount(200);

    assert.ok(account.equals(otherAccount));
    assert.deepStrictEqual(report, {credit: 200, balance: 200});
  });

  it( 'Should reduce amount,(change amount state), when deducted', () => {
    const account = new Account('suresh', 13, 1000);
    const otherAccount = new Account('suresh', 13, 900);
    const report = account.deductAmount(100);

    assert.ok(account.equals(otherAccount));
    assert.deepStrictEqual(report, {debit: 100, balance: 900});
  });

  it( 'Should return balance when balance is requested', () => {
    const account = new Account('suresh', 12, 800);
    assert.deepStrictEqual(account.accountBalance(), {balance: 800});
  });

  it( 'Should return true when amount provided is available', () => {
    const account = new Account('suresh', 11, 1200);
    assert.equal(account.isAmountAvailable(1200), true);
  });

  it( 'Should return false when amount provided is not available', () => {
    const account = new Account('suresh', 11, 300);
    assert.equal(account.isAmountAvailable(600), false);
  });

  it( 'Should return true when account is active for transaction', () => {
    const account = new Account('suresh', 20, 400);
    assert.equal(account.isAccountActive(), true);
  });
});
