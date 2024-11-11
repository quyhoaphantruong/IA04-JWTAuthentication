require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>  {
    res.send("hello");  
});

app.use('/api/auth', require('./routes/auth'));

module.exports = app;
