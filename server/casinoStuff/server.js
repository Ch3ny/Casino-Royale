const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;  // Changed port to 4000

app.use(cors({
  origin: 'http://localhost:5173' // or any other origin you want to allow
}));
app.use(express.json());

let accounts = [];

app.post('/accounts', (req, res) => {
  const { name, email, password } = req.body;
  const newAccount = { id: accounts.length + 1, name, email, password };
  accounts.push(newAccount);
  res.status(201).json({ payload: newAccount, msg: 'Account created successfully' });
});

app.get('/accounts', (req, res) => {
  res.status(200).json({ payload: accounts, msg: 'Accounts retrieved successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
