const express = require("express")

const path = require('path')
const app = express()
const fs = require('fs')

app.use(express.static("public"))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/trip-tracker', function(req, res){
  res.sendFile(path.join(__dirname + '/public/triptracker.html'))
})

app.get('/image-scrambler', function(req, res){
  res.sendFile(path.join(__dirname + '/public/imageScrambler.html'))
})

app.get('/states-game', function(req, res){
  res.sendFile(path.join(__dirname + '/public/statesGame.html'))
})

app.get('/linear-gradient-generator', function(req, res){
  res.sendFile(path.join(__dirname + '/public/gradientGenerator.html'))
})

app.get('/converter', function(req, res){
  res.sendFile(path.join(__dirname + '/public/converter.html'))
})

app.get('/pcwb', function(req, res){
  res.sendFile(path.join(__dirname + '/public/pcwb.html'))
})

app.get('/resume', function(req, res){
  const data =fs.readFileSync('./public/JKResume.pdf');
  res.contentType("application/pdf");
  res.send(data);
})

// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname + '/public/404.html'))
// })

app.use(function (req, res, next){
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'))
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));