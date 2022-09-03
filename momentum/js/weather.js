import { translator } from "../js/translator.js";

function setCity(town, language) {
    const city = document.querySelector(town);

    city.value = "Minsk";
    

    if (localStorage.getItem("city") === null) {
        localStorage.setItem("city", "Minsk");
    } else {
        city.value = localStorage.getItem("city")
    }

    city.addEventListener('change', () => {
        getWeather(city.value, language);
    });
}


async function getWeather(city = localStorage.getItem("city"), language) {
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const error = document.querySelector('.weather-error');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=310b0426dbd61afe75ddbae335355f13&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (res.ok === false) {
        weatherIcon.className = '';
        wind.textContent = '';
        humidity.textContent = '';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        error.textContent = `Error! City not found for: ${city}!`
    }
    else {
        localStorage.setItem("city", city)
        error.textContent = '';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        wind.textContent = `${translator[language].wind}: ${Math.floor(data.wind.speed, 2)} m/s`
        humidity.textContent = `${translator[language].humidity}: ${data.main.humidity}%`
        weatherDescription.textContent = data.weather[0].description;
    }
}


export { setCity, getWeather }