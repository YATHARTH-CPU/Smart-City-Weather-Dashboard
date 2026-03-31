
const API_KEY = "41fa3f1392dbb6a0cc306376c44b5443";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=" + API_KEY;

const weatherContainer = document.getElementById("weatherContainer");
const loading = document.getElementById("loading");

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
}

async function fetchWeather() {
    loading.style.display = "block";

    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();

        displayWeather(data);

    } catch (error) {
        weatherContainer.innerHTML = "❌ Error fetching data";
    } finally {
        loading.style.display = "none";
    }
}

function displayWeather(data) {
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const visibility = data.visibility / 1000;

    const windSpeed = data.wind.speed;

    const sunrise = formatTime(data.sys.sunrise);
    const sunset = formatTime(data.sys.sunset);

    const precipitation = data.rain ? data.rain["1h"] || 0 : 0;

    weatherContainer.innerHTML = `
        <h2>Pune Weather 🌤️</h2>

        <p>🌧️ Precipitation: ${precipitation} mm</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌬️ Wind: ${windSpeed} m/s</p>
        <p>🌅 Sunrise: ${sunrise}</p>
        <p>🌇 Sunset: ${sunset}</p>
        <p>🔽 Pressure: ${pressure} hPa</p>
        <p>👀 Visibility: ${visibility} km</p>
    `;
}
window.onload = () => {
    fetchWeather();
};
