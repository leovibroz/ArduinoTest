var http = require('http')
var fs=require('fs')

var MongoClient= require('mongodb').MongoClient;



var data=fs.readFileSync("data.json")
var fileContent = JSON.parse(data)
console.log(fileContent)

http.createServer(function (req, res) {

  for( x in fileContent){
    res.write( x +' '+fileContent[x]+ '\n'); //write a response to the client
    
  }
    
 
  res.end(); //end the response
}).listen(3000);