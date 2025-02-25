const button = document.querySelector('#searchBtn').addEventListener('click', () => {
    const input = document.getElementById('cityInput').value;

    function currweather(data) {
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');
        const humidity = document.getElementById('humidity');
        const wind = document.getElementById('wind');
        const cityName = document.getElementById('cityName');

        cityName.innerText = `City Name: ${data.location.name}`;
        temperature.innerText = `Temperature: ${data.current.temp_c}°C`;
        description.innerText = `Description: ${data.current.condition.text}`;
        humidity.innerText = `Humidity: ${data.current.humidity}%`;
        wind.innerText = `Wind Speed: ${data.current.wind_kph} km/h`;
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=6e7ba83dc86f4780b06102401252402&q=${input}&aqi=yes`);
    prom.then(response => response.json()).then(data => currweather(data));
});
