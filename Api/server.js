const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));