const express = require("express")

const path = require('path')
const app = express()

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

// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname + '/public/404.html'))
// })

app.use(function (req, res, next){
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'))
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));