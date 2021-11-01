import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <div className="float-left">
            <img
              src={props.data.iconUrl}
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
              {Math.round(props.data.temperature)} °C{" "}
            </span>
          </div>
          <ul className="weather-info">
            <li> {props.data.city} </li>
            <li> {props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>
              {" "}
              Last updated at <FormattedDate date={props.data.date} />{" "}
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
