import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbTemperatureCelsius } from "react-icons/tb";

function CurrentCity() {
  const [searchInput, setSearchInput] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState("");

  const API = "ec307cc452a85ca8360343d51840de48";

  useEffect(() => {
    if (searchInput === "") {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position)=> {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
      }
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`
        )
        .then((responce) => {
          setWeatherData({
            temp: responce.data.main.temp_min,
            name: responce.data.name,
            icon: responce.data.weather[0].icon,
            weather: responce.data.weather[0].main,
            description: responce.data.weather[0].description,
            humidity: responce.data.main.humidity,
            pressure: responce.data.main.pressure,
            wind: responce.data.wind.speed,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [latitude, longitude, searchInput]);

  const handleKeyPress = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${API}`
      )
      .then((responce) => {
        setWeatherData({
          temp: responce.data.main.temp_min,
          name: responce.data.name,
          icon: responce.data.weather[0].icon,
          weather: responce.data.weather[0].main,
          description: responce.data.weather[0].description,
          humidity: responce.data.main.humidity,
          pressure: responce.data.main.pressure,
          wind: responce.data.wind.speed,
        });
      })
      .catch(() => {
        alert("Enter Valid City Name...");
      });
  };

  return (
    <div style={{ color: "white", display: "grid", justifyContent: "center" }}>
      <div style={{ display: "flex", margin: "10px" }}>
        <input
          type="text"
          placeholder="Enter City Name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          // onKeyUp={handleKeyPress}
          style={{
            width: "500px",
            height: "50px",
            borderRadius: "3px",
            border: 0,
            margin: "10px",
          }}
        />
        <button
          onClick={handleKeyPress}
          style={{ height: "50px", borderRadius: "3px", margin: "10px" }}
        >
          Search
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`}
          alt="icon"
        />
        <h2>{weatherData.weather}</h2>
        <h3>, {weatherData.description}</h3>
      </div>
      <h1 style={{ fontWeight: "bolder", fontSize: "150px" }}>
        {weatherData.temp} <TbTemperatureCelsius style={{ fontSize: "80px" }} />
      </h1>
      <h1 style={{ fontWeight: "bolder", fontSize: "75px" }}>
        {weatherData.name}
      </h1>
      <div style={{ display: "flex", margin:'auto', gap: "70px" }}>
        <div style={{ alignItems: "center" }}>
          <h3>{weatherData.humidity} %</h3>
          <h3>Humidity </h3>
        </div>
        <div style={{ alignItems: "center" }}>
          <h3>{weatherData.pressure} hPa</h3>
          <h3>Pressure </h3>
        </div>
        <div style={{ alignItems: "center" }}>
          <h3>{weatherData.wind} km/h</h3>
          <h3>Wind </h3>
        </div>
      </div>
    </div>
  );
}

export default CurrentCity;
