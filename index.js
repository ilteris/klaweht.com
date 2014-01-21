
var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(req, res, next) {
    res.send("Hello <strong> home page </strong>");
});

app.get("/projects", function(req, res, next){
    res.send("Hello <strong> projects </strong>")
});

app.get("/info", function(req, res, next) {
    res.send("Hello <strong> info </strong>")
});

http.createServer(app).listen(8000);
