$.ajax(
	{
    url: "http://polar-retreat-1578.herokuapp.com",
    dataType: "jsonp",
    success: function(data) 
    	{
      	var tweets = '';
      		$.each(data.tweet, function (i, tweet) 
      		{ tweets =+ 
      			    $('<img>',
      					    {
      					    src: tweet.url,
      					    }
      			 	    );
      		}	    )	
    	}
    } );

$('.tweets').append(tweets)