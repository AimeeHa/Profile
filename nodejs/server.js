const express = require('express');
const app = express();

app.post('/api/contact', (req, res) => {
  if (req.query.name === '') {
    return res.status(400).send({ message: 'Name is required' });
  }
  res.send({ message: 'Message Received!' });
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
