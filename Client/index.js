const express = require('express');
const app = express();
var os = require('os');
const port = 10094;
const bodyParser = require('body-parser');
var osutils = require("os-utils");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    osutils.cpuUsage(function(v) {
        var speed = os.cpus()[1].model;
        var cpuspeed = speed.substring(speed.length - 7)
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
            "CPUsSpeed": cpuspeed,
            "CPULoad": (v * 100).toFixed(2),
            "Uptime": osutils.sysUptime(),
        };
        console.log(Math.round(os.totalmem() / 1024 / 1024));
        res.send(data);
    });
});

app.post('/active', (req, res) => {
    res.send(`active`);
});


app.listen(port, () => console.log(`API Listening on ${port}!`));