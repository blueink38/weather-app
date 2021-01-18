// api key:  9d8f959959fa8dbc8906a07dad26301a

var cityFormEl = document.querySelector("#city-input");
var cityInputEl = document.querySelector("#city-choice");
var cityWeatherToday = document.querySelector("#weather-0")
var cityWeatherFutureOne = document.querySelector("#weather-1");
var cityWeatherFutureTwo = document.querySelector("#weather-2");
var cityWeatherFutureThree = document.querySelector("#weather-3");
var cityWeatherFutureFour = document.querySelector("#weather-4");
var cityWeatherFutureFive = document.querySelector("#weather-5");


$(document).ready(function() {
// get city and time, save to Local Storage
let cities = [];
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

    var getCityWeather = function(city) {
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

}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', getWeather)});
});