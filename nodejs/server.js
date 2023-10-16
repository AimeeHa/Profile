const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  console.log('GET request received');
  res.send({ message: 'Hello from the server!' });
});

app.get('/api/contact', (req, res) => {
  console.log('GET request received');
  res.send({ message: 'Hello from the server!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (req) {
    db.query(
      'INSERT INTO messages SET ?',
      { name, email, message },
      (err, res) => {
        if (err) throw err;

        console.log('Last insert ID:', res.insertId);
      },
    );
    return res.status(200).send({ message: 'Message sent successfully!' });
  } else {
    res
      .status(400)
      .send({ message: 'Something went wrong. Please try again!' });
  }
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
