/*GLOBAL VARIABLES*/ //2,3,4,5 
var http = require ('http');
var twit = require ('twit');
var key = require ('key.js');
var twitter = new twit (keys);



/*SERVER*/ //10
http.createServer(function(request, response) {
    fs.readFile('tweetLog.json', function read(err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(200, {
            'Content-Type': 'text/json',
            'Access-Control-Allow-Origin': '*'
        });
        response.end(data);
    })
}).listen(3000);

