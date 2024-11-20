const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

app.use(helmet());
app.use(cors());
app.use(compression());

app.use(express.json());

module.exports = app;