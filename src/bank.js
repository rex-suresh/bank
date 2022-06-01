const {Account} = require('./Account.js')

const bankAccount = new Account('Suresh', 13, 3000);
bankAccount.addAmount(100);
bankAccount.deductAmount(300);
