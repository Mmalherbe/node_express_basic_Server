var express = require('express');
var app = express();
// Allow Cross-Origin requests, just leave this as is
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname +'/client'));
//Store all HTML files in view folder.

app.get('/',function(req,res){
    res.sendFile('/index.html');
    //It will find and locate index.html from View or Scripts
});

app.get('/', function (req, res) {
    // respond to a GET request without anything after the url

    jsonfile.readFile(file, function(err, obj) {
        console.dir(obj);
        res.send(obj);
    });



});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
