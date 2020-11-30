/* eslint-disable no-console */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(4000, (req, res) => {
  console.log('server is up and running on port 4000');
});
