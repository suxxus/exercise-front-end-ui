var express = require('express')
    path = require('path'),
    port = process.env.PORT || 5000,
    CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

endPoinstApi(app, {
    data: data,
    getJson: jsonfileservice.getJsonFromFile

});

var server = app.listen(port, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
