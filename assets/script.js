var APIkey = "40358e0ff9440bfbb506d9580e0689e6";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "get"
})

.then(function(response) {
    console.log(queryURL);
    console.log(response);
});


// $("#search-button").on("click", function() {
    // var city = $(this).attr("search-button");
//     var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid={40358e0ff9440bfbb506d9580e0689e6}";
// });

// fetch(queryURL);
//  $.ajax({
//     url: queryURL,
//     method: "get"
//  })
 
//  .then(function(response) {
//     console.log(response)
//  });
//     for (var i = 0; i < results.length; i++ ) {

//     }
//  }

// });
    

// var APIkey = "40358e0ff9440bfbb506d9580e0689e6";
// var city;
// fetch(queryURL)

// $("#search-button").on(|"click", function());

// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={40358e0ff9440bfbb506d9580e0689e6}."

// $.ajax({
    // url: queryURL,
    // method: "get"
// })

