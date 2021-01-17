let cities = [];

const getWeather = (ev) => {
    ev.preventDefault();
    let city = {
        id: Date(),
        city: document.getElementById('city').value
    }

    cities.push(city);
    // document.querySelector('form').reset();
    console.log(city);
// save cities and date to Local Storage
    localStorage.setItem('MyCityList', JSON.stringify(cities) );

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', getWeather);
})