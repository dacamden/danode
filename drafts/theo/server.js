var http = require ('http');
var twit = require ('twit');
var key = require ('key.js');
var twitter = new twit (keys);

var jsonPacket = []
    //
    // filter the public stream by english tweets containing `#apple`
    //
var stream = twitter.stream('statuses/filter', {
    track: 'sunshine',
    language: 'en',
    /*location: 'London'*/
})
stream.on('tweet', function(tweet) {
    
    if (tweet.entities.media === undefined) {} else {
        var url = tweet.entities.media[0].media_url
        var id = tweet.user.screen_name
        
        
            //console.log(tweetobject)
        fs.readFile('tweetLog.json', function read(err, data) {
            if (err) {
                throw err;
            }
           var singleTweet = JSON.stringify(
               {"Tweet":{"id":id,"url":url}}, null, 4)
//            {
                
//                 console.log('New tweet');
//             };
           fs.readFile('tweetLog.json', function(err,data){
             //console.log(data)
              var allTweets = JSON.parse(data);
              allTweets.push(singleTweet)
                 JSON.stringify(allTweets)
              fs.writeFile('tweetLog.json',allTweets, function (err){
                 if (err) throw err; 
                 console.log('new tweet')
                 
              })
           })
        });
    }
});
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
