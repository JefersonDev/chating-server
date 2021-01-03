const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());


const mongodb = require('./app/modules/mongodb');


const sign = require('./app/routes/sign');
app.use(sign);



module.exports = app;
