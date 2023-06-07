const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.set(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("port", 8888);

module.exports = app;