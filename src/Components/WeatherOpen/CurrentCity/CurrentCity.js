import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbTemperatureCelsius } from "react-icons/tb";
import { API } from "../Keys";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";
import sunrise from "../Assets/sunrise.png";
import sunset from "../Assets/sunset.png";
import pressure from "../Assets/cloudy.png";
import long from '../Assets/longitude.png'
import lati from '../Assets/latitude.png'
import sea from '../Assets/sea-level.png'
import ground from '../Assets/ground.png'
import "./CurrentCity.css";

function CurrentCity() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
      
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`
        )
        .then((responce) => {
          setWeatherData({
            temp: Math.floor(responce.data.main.temp),
            name: responce.data.name,
            icon: responce.data.weather[0].icon,
            weather: responce.data.weather[0].main,
            description: responce.data.weather[0].description,
            humidity: responce.data.main.humidity,
            pressure: responce.data.main.pressure,
            wind: responce.data.wind.speed,
            sunrise: new Date(
              responce.data.sys.sunrise * 1000 + responce.data.timezone
            ).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }),
            sunset: new Date(
              responce.data.sys.sunset * 1000 + responce.data.timezone
            ).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }),
            long:responce.data.coord.lon,
            lati:responce.data.coord.lat,
            sea:responce.data.main.sea_level,
            ground:responce.data.main.grnd_level
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [latitude, longitude]);

  

  return (
    <div className="currentCity">
      <div className="currentNameStatus">
        <h1 className="currentName">Current Location</h1>
        <div className="currentIcon">
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`}
              alt="icon"
            />
            <h2>{weatherData.weather}</h2>
          </div>
          <span className="currentTemp">
            <h1 className="currentName">{weatherData.name}</h1>
            {weatherData.temp} <TbTemperatureCelsius />
          </span>
          <div></div>
        </div>
      </div>

      <div className="currentStatus">
        <div className="currentStatusL">
          <div className="currentStatusSub">
            <img src={humidity} alt="cloud" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.humidity} %</h4>
              <h6>Humidity </h6>
            </span>
          </div>
          <div className="currentStatusSub">
            <img src={pressure} alt="pressure" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.pressure} hPa</h4>
              <h6>Pressure </h6>
            </span>
          </div>
          <div className="currentStatusSub">
            <img src={wind} alt="wind" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.wind} kmh</h4>
              <h6>Wind </h6>
            </span>
          </div>
        </div>
        <div className="currentStatusL">
          <div className="currentStatusSub">
            <img src={sunrise} alt="sunrise" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.sunrise}</h4>
              <h6>Sunrise </h6>
            </span>
          </div>
          <div className="currentStatusSub">
            <img src={sunset} alt="sunset" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.sunset}</h4>
              <h6>Sunset </h6>
            </span>
          </div>
        </div>
      </div>
      <div className="currentStatus">
      <div className="currentStatusL">
          <div className="currentStatusSub">
            <img src={long} alt="sunrise" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.long}</h4>
              <h6>Latitude </h6>
            </span>
          </div>
          <div className="currentStatusSub">
            <img src={lati} alt="long" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.lati}</h4>
              <h6>Longitude </h6>
            </span>
          </div>
          <div className="currentStatusSub">
            <img src={sea} alt="long" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.sea}</h4>
              <h6>Sea Level </h6>
            </span>
          </div>
          <div className="currentStatusSub">
            <img src={ground} alt="long" />
            <span>
              <h4 style={{ margin: 0 }}>{weatherData.ground}</h4>
              <h6>Ground Level </h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentCity;
