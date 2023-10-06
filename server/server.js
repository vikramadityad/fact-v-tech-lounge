const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const db = require('./config/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));