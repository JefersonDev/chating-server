const express = require('express');

const app = express();

app.use(express.json());


const sign = require('./app/routes/sign');
app.use(sign);
module.exports = app;
