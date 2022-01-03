const express = require('express');
const app = express();
var os = require('os');
const port = 10094;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    var data = {
        "hostname": os.hostname(),
        "platform": os.platform(),
        "arch": os.arch(),
        "release": os.release(),
        "uptime": os.uptime(),
        "totalmem_GB": Math.round(os.totalmem() / 1024 / 1024 / 1024) + " GB",
        "totalmem_MB": Math.round(os.totalmem() / 1024 / 1024) + " MB",
        "freemem_GB": Math.round(os.freemem() / 1024 / 1024 / 1024) + " GB",
        "freemem_MB": Math.round(os.freemem() / 1024 / 1024) + " MB",
        "CPU": os.cpus()[1].model,
        "CPU Cores": os.cpus().length,
        "CPUsSpeed": Math.log(os.cpus()[1].speed / 1000).toFixed(2) + " GHz",
        "HomeDir": os.homedir(),
        "User": os.userInfo().username,
        "Version": os.version()
    };
    console.log(Math.round(os.totalmem() / 1024 / 1024));
    res.send(data);
});

app.post('/active', (req, res) => {
    res.send(`active`);
});


app.listen(port, () => console.log(`API Listening on ${port}!`));