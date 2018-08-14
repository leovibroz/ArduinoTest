const http = require('http');

var server = http.createServer(function(request, response) {
if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            console.log("sim")
            body += data;
        });
        request.on('end', function () {
            try {

              var post = JSON.parse(body);
              // deal_with_post_data(request,post);
              console.log(post); // <--- here I just output the parsed JSON
              response.writeHead(200, {"Content-Type": "text/plain"});
              response.end();
              return;
            }catch (err){
              response.writeHead(500, {"Content-Type": "text/plain"});
              response.write("Baa\n");
              console.log("error")
              response.end();
              return;
            }
        });
    }
});
server.listen(80);
console.log("server started")   