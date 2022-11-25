const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));