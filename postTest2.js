var http = require('http');

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

    res.on('data', function (chunk) {
        console.log('BODY:', chunk);
    });

    res.on('end', function () {
        console.log('No more data in response.');

    });
});

req.on('error', function (e) {
    console.log('Problem with request:', e.message);
});

req.end();