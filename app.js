const express = require('express');
const app = express();
const homerouter = require('./router/homerouter');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homerouter);

module.exports = app;