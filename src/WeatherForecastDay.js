import React from "react";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  const icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span> </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
        <img className="icon" src={icon} alt="" />
      </div>
    </div>
  );
}
