
var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(req, res, next) {
    res.send("Hello <strong> home page </strong>");
});

app.get("/projects", function(req, res, next){
    res.send("Hello <strong> projects </strong>")
})
