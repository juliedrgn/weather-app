import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Test() {
  const [ready, setReady] = useState({ ready: false });
  const [weatherData, setweatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <h1> weather </h1>
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter your city"
                autofocus="on"
                className="form-control"
                id="search-input"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control"
                id="search-city"
              />
            </div>
            <div className="col-3">
              <button
                type="button"
                className="button-current-location"
                id="button-current-location"
              >
                My location
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <div className="float-left">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                id="icon"
                className="float-left"
                alt="Cloudy"
                width="150"
              />
            </div>
          </div>
          <div class="col-6">
            <div>
              <span className="temperature">
                {Math.round(weatherData.temperature)} °C{" "}
              </span>
            </div>
            <ul className="weather-info">
              <li> {weatherData.city} </li>
              <li> {weatherData.description}</li>N
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Last updated at {weatherData.date}</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="weather-forecast" id="forecast"></div>
      </div>
    );
  } else {
    const apiKey = "a921daf97c39af523ba6c55cc2fd35f9";
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
