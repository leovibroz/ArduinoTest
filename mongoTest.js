const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const http = require('http');
// Connection URL

const url = "mongodb+srv://leovibroz:leovibroz1@brozingadatabase-cjhzs.mongodb.net/";
const express = require('express'); 


async function getDataFromArduino(){
   


    var options = {
        hostname: '192.168.1.20',
        port: 80,
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
           // 'Content-Length': postData.length
        }
    };
    
   
    var req = http.request(options, function (res) {
        
        //console.log('STATUS:', res.statusCode);
        //console.log('HEADERS:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        var dataFromArduino=[];
        res.on('data', function (chunk) {
            dataFromArduino = chunk;
            console.log(dataFromArduino);

        });
    
       
        res.on('end', function () {
            

            dataFromArduino=JSON.parse(dataFromArduino.replace(/_/g,'"'));

            postToMongo(dataFromArduino);
            console.log('No more data in response.');
           
        });
    });
    
    req.on('error', function (e) {
        console.log('Problem with request:', e.message);
        
    });

    req.end();
    
}


async function postToMongo(dataFromArduino){
    const app = express();

    const con = await mongo.connect(url,{ useNewUrlParser: true })
    
    const banco = await con.db("novo");
    
    const testando = await banco.collection("testando");
    console.log(dataFromArduino)

    var dados = await testando.insertOne(dataFromArduino);
}



async function main(){

    try{


getDataFromArduino();

//console.log(data)
//await testando.insertOne(dataFromArduino);

//dados = await testando.findOne();

//app.listen(3000, () => {console.log('Escutando na porta 3000')});

//app.get("/",function (req,res){
       
    
    //res.send(dados)

//});

}catch(e){

    console.log(e)
}

}

main();