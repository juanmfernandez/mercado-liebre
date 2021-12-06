const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.listen(3000, () => console.log('Running mercado liebre'));

app.get('/', function(req, res){
    res.sendFile(path.resolve('./views/home.html'))
});
/*
app.get('/babbage', function(req, res){
    res.sendFile(path.resolve('./views/babbage.html'))
});
app.get('/berners-lee', function(req, res){
    res.sendFile(path.resolve('./views/berners-lee.html'))
});
app.get('/clarke', function(req, res){
    res.sendFile(path.resolve('./views/clarke.html'))
});
app.get('/hamilton', function(req, res){
    res.sendFile(path.resolve('./views/hamilton.html'))
});
app.get('/hopper', function(req, res){
    res.sendFile(path.resolve('./views/hopper.html'))
});
app.get('/lovelace', function(req, res){
    res.sendFile(path.resolve('./views/lovelace.html'))
});
app.get('/turing', function(req, res){
    res.sendFile(path.resolve('./views/turing.html'))
});
*/