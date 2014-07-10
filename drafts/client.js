$.ajax({

    url: "polar-retreat-1578.herokuapp.com",
    dataType: "jsonp",
    success: function(data) {
        
      $.each(data.Tweet, function () {
        $( ".tweets" ).append("<li> <img src= "+ this['url']+"/> </li>");
      });

    }});
