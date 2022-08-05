export async function getWeather(city) {
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=310b0426dbd61afe75ddbae335355f13&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed, 2)} m/s`
    humidity.textContent = `Humidity: ${data.main.humidity}%`
    weatherDescription.textContent = data.weather[0].description;
}
