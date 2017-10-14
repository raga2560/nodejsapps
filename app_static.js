var express = require('express');
var app = express();

app.use(express.static(__dirname + '/package1/startbootstrap-heroic-features'));

app.listen(3000);