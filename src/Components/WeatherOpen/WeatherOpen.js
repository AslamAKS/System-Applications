import React from "react";
import { Link } from "react-router-dom";
import CurrentCity from "./CurrentCity/CurrentCity";
import "./WeatherOpen.css";
import Search from "./SearchCity/Search";
import {FcHome} from 'react-icons/fc'

function WeatherOpen() {
  return (
    <div className="WeatherOpen">
      <div className="backToHome">
        <Link to='/'>
        <FcHome style={{width:'50px',height:'50px'}}/>
        </Link>
      </div>
        <CurrentCity />
        <Search/>
    </div>
  );
}

export default WeatherOpen;
