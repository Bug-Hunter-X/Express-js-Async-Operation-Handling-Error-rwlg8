const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some asynchronous operation to fetch user data ...
  // This line is problematic because it assumes the operation is synchronous!
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});