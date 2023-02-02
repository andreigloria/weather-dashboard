var APIkey = "40358e0ff9440bfbb506d9580e0689e6";

var city = ""

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;

//creating variables for ID's from HTML

var searchHistory = []

var searchForm = $("#search-form")

var searchInput = $("#search-input")

var todayEl = $("#today")

var forecastEl = $("#forecast")

var historyEl = $("#history")

function renderTodayCard(city, weather) {
    var date = moment().format("D/M/YYYY");
    var temp = weather.main.temp; 
    var windSpeed = weather.wind.speed;
    var humidity = weather.main.humidity;
    var icon = 'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
    var iconText = weather.weather[0].description || weather[0].main;

    var card = $('<div>');
    var cardBody = $('<div>');
    var heading = $('<h2>');
    var weatherIcon = $('<img>');
    var tempEl = $('<p>');
    var windEl = $('<p>');
    var humidityEl = $('<p>');
}

function getWeather(city) {

$.ajax({
    url: queryURL,
    method: "get"
})

.then(function(response) {
    console.log(queryURL);
    console.log(response);
    console.log(response.list[0]);
    console.log(response.list[0].main.humidity);
    console.log(response.wind);
    console.log(response.list[0]);
});
}

function searchClick(event) { //creating a function for an event 
    event.preventDefault(); //
    city = searchInput.val().trim();
    console.log(city);
}

searchForm.on("submit", searchClick)

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

