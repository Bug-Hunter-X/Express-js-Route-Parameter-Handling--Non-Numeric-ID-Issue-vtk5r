const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

// Incorrect handling of non-numeric IDs
//If the userId is not a number the parseInt will return NaN and the database query might not work as expected 
//This can lead to unexpected behavior or errors.  