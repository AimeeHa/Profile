const { DATABASE_URL } = require('./config');

const mysql = require('mysql2');

// Create the connection to the database
const db = mysql.createConnection(DATABASE_URL);

db.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  const createMessageTable = `create table if not exists messages(
                          id int primary key auto_increment,
                          name varchar(255) not null,
                          email varchar(255) not null,
                          message text not null
                      )`;

  db.query(createMessageTable, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
});

module.exports = db;
