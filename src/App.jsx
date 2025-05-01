import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null); // better to use `null` instead of `[]`

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=27.7172&lon=85.3240&appid=d59a3fcf4bcc4d0d0b5f818c9aa9d685&units=metric"
      )
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Weather App</h1>
      {weather ? (
        <div className="weather-container">
          <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          </div>
          <div>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}

export default App;
