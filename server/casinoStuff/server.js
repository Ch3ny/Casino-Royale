const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());


const users = [];


app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(user => user.username === username || user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, email, password });
  res.status(200).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
