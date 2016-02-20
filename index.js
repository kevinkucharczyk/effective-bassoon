var jf = require('jsonfile'),
    requester = require('request-promise'),
    express   = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html')
});

var secrets = jf.readFileSync('./secrets.json');

requester ('http://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&units=metric&APPID=' + secrets.appId)
  .then(function(response) {
    console.log(response);
  });

app.listen(666);
