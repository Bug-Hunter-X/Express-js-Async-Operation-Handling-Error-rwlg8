const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const userData = await fetchUserData(userId); //Simulates async operation
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Server error');
  }
});

async function fetchUserData(id) {
  // Simulate an asynchronous operation (e.g., database query)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        '1': { name: 'John Doe' },
        '2': { name: 'Jane Smith' }
      };
      resolve(users[id]);
    }, 500);
  });
}