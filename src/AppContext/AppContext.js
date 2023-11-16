import React, { createContext, useState } from "react";
import axios from "axios";
import {API} from '../Components/WeatherOpen/Keys'

export const ContextApp = createContext();

function AppContext({ children }) {

  const [calculator, updateCalculator] = useState({
    current: "",
    prevoius: "",
    operations: {
      operator: "",
      sign: ""
    },
    seconNum: "",
    math: "",
    equal: "",
  });
  const [weatherData, setWeatherData] = useState([]);
  const [dataAvailable, setDataAvailable]=useState(false)
  const [wordEntered, setWordEntered] = useState("");


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
    <ContextApp.Provider
      value={{ calculator, updateCalculator, weatherData, dataAvailable, setDataAvailable, searchResult, wordEntered, setWordEntered }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export default AppContext;
