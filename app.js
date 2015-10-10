var express = require('express');
var app = express();

app.engine("html", require("ejs").renderFile);

// Routing
app.use('/assets', express.static('app'));

//DEV DEV DEV
app.use('/vendor', express.static('vendor'));


app.get("/", function(req, res) {
    return res.render("../app/index.html");
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Timetable app listening at http://%s:%s', host, port);
});
