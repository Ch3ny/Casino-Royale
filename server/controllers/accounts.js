let accounts = [];

const getAllAccounts = (req, res) => {
  res.status(200).json({ payload: accounts, msg: 'Accounts retrieved successfully' });
};

const getAccountById = (req, res) => {
  const account = accounts.find(acc => acc.id === parseInt(req.params.id));
  if (account) {
    res.status(200).json({ payload: account, msg: 'Account retrieved successfully' });
  } else {
    res.status(404).json({ msg: 'Account not found' });
  }
};

const createAccount = (req, res) => {
  const { name, email, password } = req.body;
  const newAccount = { id: accounts.length + 1, name, email, password };
  accounts.push(newAccount);
  res.status(201).json({ payload: newAccount, msg: 'Account created successfully' });
};

const updateAccount = (req, res) => {
  const account = accounts.find(acc => acc.id === parseInt(req.params.id));
  if (account) {
    const { name, email, password } = req.body;
    account.name = name;
    account.email = email;
    account.password = password;
    res.status(200).json({ payload: account, msg: 'Account updated successfully' });
  } else {
    res.status(404).json({ msg: 'Account not found' });
  }
};

const deleteAccount = (req, res) => {
  const accountIndex = accounts.findIndex(acc => acc.id === parseInt(req.params.id));
  if (accountIndex !== -1) {
    accounts.splice(accountIndex, 1);
    res.status(200).json({ msg: 'Account deleted successfully' });
  } else {
    res.status(404).json({ msg: 'Account not found' });
  }
};

module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount
};
