const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Logging Middleware
app.use(morgan('dev'));

// body parsing middleware;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// api routes
app.use('/api', require('./api'));

// index.html route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handler
app.use((err, req, res, _next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

// let's listen now
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('I am Commander Express');
  console.log('And this is my favorite port on the citadel: ', PORT);
});
