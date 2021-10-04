import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  const [temperature, displayTemperature] = useState("");
  const [description, displayDescription] = useState("");
  const [humidity, displayHumidity] = useState("");
  const [wind, displayWind] = useState("");
  const [icon, displayIcon] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function submitSearch(event) {
    event.preventDefault();
    let apiKey = "a921daf97c39af523ba6c55cc2fd35f9";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function displayCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}ºC</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>{weather.wind} km/h</li>
          <li>
            <img src={weather.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="SearchForm">
        <form onSubmit={submitSearch}>
          <input
            type="search"
            placeholder="Type a City"
            onChange={displayCity}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
