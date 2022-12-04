const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Vamshi!7285',
  database: 'carrentalsystem',
});

app.post('/register', (req, res) => {
  const row = req.body;
  const name = row.name;
  const email = row.email;
  const username = row.username;
  const password = row.password;

  const insertRow =
    'INSERT INTO registrations (Name, Email, Username, Password) VALUES (' +
    JSON.stringify(name) +
    ', ' +
    JSON.stringify(email) +
    ', ' +
    JSON.stringify(username) +
    ', ' +
    JSON.stringify(password) +
    ' )';

  db.query(insertRow, [row], (err, rows) => {
    if (err) throw err;
  });
});

app.get('/login', (req, res) => {
  db.connect(function (err) {
    if (err) throw err;
    db.query('SELECT * FROM registrations', function (err, result, fields) {
      if (err) throw err;
      res.json({ data: result });
    });
  });
});

app.listen(3001, () => {
  console.log('runnig server on 3001');
});
