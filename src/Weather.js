import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      country: response.data.country,
    });
  }

function search() {
  const apiKey = "4e2df5aotaa983694533f2b4440ef095";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

}

  function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event) {
  setCity(event.target.value);  
}

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input 
                type="search" 
                placeholder="Enter a city..." 
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        
      </div>
    );
  } else {
    search()
    return "Loading..."
  }
}