const express = require('express');
const app = express();
const config = require("./config.json");
const port = config.port;
const bodyParser = require('body-parser');
const os = require('os');