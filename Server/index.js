const express = require('express');
const app = express();
const config = require("./config.json");
const servers = require("./servers.json")
const port = config.port;
const bodyParser = require('body-parser');
const os = require('os');
var osutils = require('os-utils');


// servers.forEach(server => {
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});