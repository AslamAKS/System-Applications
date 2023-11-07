import React, { createContext, useState } from "react";
import { API } from "../WeatherOpen/Keys";
import axios from "axios";

export const ContextSearch = createContext();

function SearchContext({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [dataAvailable, setDataAvailable]=useState(false)

  const searchResult = (searchInput) => {
    if (searchInput) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${API}`
        )
        .then((response) => {
          setWeatherData({
            temp: Math.floor(response.data.main.temp),
            name: response.data.name,
            icon: response.data.weather[0].icon,
            weather: response.data.weather[0].main,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            wind: response.data.wind.speed,
          });
          setDataAvailable(true)
        })
        .catch((e) => {
          alert('Enter Valid City Name')
        });
    }else{
      setWeatherData(null)
      dataAvailable(false)
    }
  }

  return (
    <ContextSearch.Provider value={{ weatherData, dataAvailable, setDataAvailable, searchResult }}>
      {children}
    </ContextSearch.Provider>
  );
}

export default SearchContext;