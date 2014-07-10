var key = require ('key.js');
var twit = require ('twit');
var http = require ('http');
var twitter = new twit (keys);

var stream = 
twitter.stream  
  ('statuses/filter', 
    {
      track: 'mango'
    }
  );

stream.on 
  ('tweet', function (tweet) 
    {
      console.log (tweet)
    }
  );