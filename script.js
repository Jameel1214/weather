async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = '8163bf381e7a6c0153fab596db82512f'; // Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weather = `
        <p><strong>${data.name}</strong></p>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    } else {
      document.getElementById("weatherResult").innerHTML = "City not found.";
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching weather.";
  }
}
