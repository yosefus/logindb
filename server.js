// require('dotenv').config();
const express = require('express');
const { connect } = require('./db');
const app = express();

app.use(express.json());
app.use(express.static('public'));

connect().then(() => {
  require('./router')(app);
  app.listen(3000);
});
