import React, { useContext } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { ContextSearch } from "../../Context/SearchContext";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";
import pressure from "../Assets/cloudy.png";
import "./SearchCityResult.css";

function SearchCityResult() {
  const { weatherData, dataAvailable } = useContext(ContextSearch);

  return (
    <div>
        {dataAvailable && (
        <div className="currentNameStatus">
        <h1 className="currentName">{weatherData.name}</h1>
        <div className="currentIcon">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="icon"
          />
          <div>
            <h2>{weatherData.weather}</h2>
          </div>
        </div>
        <h1 className="currentTemp">
          {weatherData.temp} <TbTemperatureCelsius />
        </h1>

        <div className="currentStatus">
          <div>
            <img src={humidity} alt="cloud" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.humidity} %</h4>
              <h6>Humidity </h6>
            </span>
          </div>
          <div>
            <img src={pressure} alt="pressure" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.pressure} hPa</h4>
              <h6>Pressure </h6>
            </span>
          </div>
          <div>
            <img src={wind} alt="wind" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.wind} kmh</h4>
              <h6>Wind </h6>
            </span>
          </div>
        </div>
      </div>
        )}
        {!dataAvailable &&(
      <div className="noData">Search City Here...</div>
        )}
    </div>
  );
}

export default SearchCityResult;
