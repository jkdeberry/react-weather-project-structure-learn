import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
 
  return (
    <div>
      <div className="WeatherForecastDay">{formatDay()}</div>
      <WeatherIcon code="CLEAR_DAY" size={32}/>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{Math.round(props.data.temperature.maximum)}°</span>
        <span className="WeatherForecast-temperature-min">{Math.round(props.data.temperature.minimum)}°</span>
      </div>
    </div>
  )
}