// create an express app
const express = require("express")

const path = require('path')
const app = express()

// use the express-static middleware
app.use(express.static("public"))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/404.html'))
})

app.use(function (req, res, next){
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));