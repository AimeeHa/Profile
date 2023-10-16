const mysql = require('mysql');
const { password } = require('./config');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'thongminh',
  database: 'profile',
});

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
