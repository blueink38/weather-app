fetch("api.openweathermap.org/data/2.5/find?q=London&appid=01a")
.then(res => console.log(res));


    // get city from input element
    var city = cityInputEl.value.trim();
    console.log(city);

    if (city) {
        getCityWeather(city);

    // clear old content
        cityWeatherToday.textContent = "";
        cityWeatherFutureOne = "";
        cityWeatherFutureTwo = "";
        cityWeatherFutureThree = "";
        cityWeatherFutureFour = "";
        cityWeatherFutureFive = "";
    } else {
        alert("Please enter a city");
    }
};




var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "9d8f959959fa8dbc8906a07dad26301a";



cityInputEl.addEventListener("click", formSubmitHandler);
document.getElementById('btn').addEventListener('click', getWeather));




function getCityWeather(city) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "9d8f959959fa8dbc8906a07dad26301a";

    fetch(apiURL)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data, city);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
}


$.ajax( {
    url: apiURL,
    method: "GET"
}).then(function(response) {
    var today = $("<h4>").text(moment().format('l'));
    var
})




const getWeather = (ev) => {
    ev.preventDefault();
    let city = {
        id: Date(),
        city: document.getElementById('city-choice').value.trim()
    }

    cities.push(city);
    // document.querySelector('form').reset();
    console.log(city);
    // save cities and date to Local Storage
    localStorage.setItem('MyCityList', JSON.stringify(cities) );


}


const cityFormEl = document.getElementById("#city-input");
const cityInputEl = document.getElementById("#city-choice");
const cityWeatherToday = document.getElementById("#weather-0")
const cityWeatherFutureOne = document.getElementById("#weather-1");
const cityWeatherFutureTwo = document.getElementById("#weather-2");
const cityWeatherFutureThree = document.getElementById("#weather-3");
const cityWeatherFutureFour = document.getElementById("#weather-4");
const cityWeatherFutureFive = document.getElementById("#weather-5");

submit-btn.addEventListener('click', getWeather)






$(document).ready(function() {

    var cities = [];
    $("#weather-0").hide();
    $("#future-forcast").hide();
    $("#city-list").hide();

    // api for searched city
    function cityForcast(city) {
        var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=";
        var apiKey = "9d8f959959fa8dbc8906a07dad26301a";

        $.ajax( {
            url: apiURL,
            method: "GET"
        }).then(function(response) {
            var today = $("<h4>").text(moment().format('l'));
            var tempF = (response.main.temp);

            $("#cityName").text(response.name);
            $("#cityName").append(today);
        })
    } 
});
