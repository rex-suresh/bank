const assert = require('assert');
const Account = require('./Account.js');

describe('Account', () => {
  it( 'Should add amount,(change amount state), when added', () => {
    const account = new Account('suresh', 10, 0);
    const otherAccount = new Account('suresh', 10, 200);
    const report = account.addAmount(200);

    assert.ok(account.equals(otherAccount) && otherAccount.equals(account));
    assert.deepStrictEqual(report, {credit: 200, balance: 200});
  });
});