const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from App Engine!' });
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
