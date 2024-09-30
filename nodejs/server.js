const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('dotenv').config();
const MONGO_URI = config.parsed.MONGO_URI;

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  console.log('GET request received');
  res.send({ message: 'Hello from the server!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const contact = client.db('profile').collection('contact');
  async function recordDB() {
    try {
      await contact.insertOne({
        name: name,
        email: email,
        message: message,
      });
      return res.status(200).send({ message: 'Message sent successfully!' });
    } catch (error) {
      res
        .status(400)
        .send({ message: 'Something went wrong. Please try again!' });
    }
  }

  if (req) {
    recordDB();
  } else {
    res
      .status(400)
      .send({ message: 'Something went wrong. Please try again!' });
  }
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
