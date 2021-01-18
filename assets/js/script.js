const apiKey = "9d8f959959fa8dbc8906a07dad26301a"

$(document).ready(function() {
    var cities = [];
    $("#weather-0").hide();
    $("#future-forcast").hide();

    // begin api call for current city
    function displayWeather(city) {
        var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=" + apiKey;

        $.ajax( {
            url: apiURL,
            method: "GET"
        }).then(function(response) {
            weatherIcon = response.weather[0].icon;
            var date = $("<h4>").text(moment().format('l'));
            var icon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");

            $("#city").text(response.name);
            $("#city").append(date);
            $("#city").append(icon);
            $("#temp-0").text(response.main.temp);
            $("#humidity-0").text(response.main.humidity);
            $("#wind-0").text(response.wind.speed);

                var lat = response.coord.lat;
                var lon = response.coord.lon;
                var apiUvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly&appid=" + apiKey;

                $.ajax( {
                    url: apiUvURL,
                    method: "GET"
                }).then(function(response) {
            $("#uv-0").text(response.daily.uvi);
                var uvIndex = response.value;

                $("#uv-0").removeClass("good");
                $("#uv-0").removeClass("moderate");
                $("#uv-0").removeClass("bad");

                if (uvIndex <= 2.9) {
                    $("uv-0").addClass("good"); 
                } else if (uvIndex >=3 && uvIndex <= 5) {
                    $("#uv-0").addClass("moderate");
                } else {
                    $("#uv-0").addClass("bad");
                };
            $("#uv-0").text(response.value);
                });
                $("#weather-0").show();
            });
    };
    // end api call for current city

    // begin api call for future forcast
});