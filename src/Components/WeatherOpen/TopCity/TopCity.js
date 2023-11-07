import React, { useEffect, useState } from "react";
import "./TopCity.css";
import axios from "axios";
import { API } from "../Keys";

function TopCity() {
  const [array, setArray] = useState("");
  const [delhi, setDelhi] = useState("");
  const [chennai, setChennai] = useState("");

  let city = ["Delhi", "Chennai", "Mumbai", "Bangalore"];
  useEffect(() => {
    {
      city.map((obj) => {
        console.log(obj);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${obj}&units=metric&appid=${API}`
          )
          .then((responce) => {
            setArray(responce.data);
          console.log(array,'done');
          setDelhi(responce.data)

          });

      });
      
    }
  }, []);
  return (
    <div className="topcity">
      <h1></h1>
      <div className="images">
        <img
          src="https://cdn.pixabay.com/photo/2016/05/08/15/23/india-1379273_1280.jpg"
          alt="img"
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/03/20/11/54/sky-3243038_1280.jpg"
          alt="img1"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/07/25/12/07/bandra-worli-sea-link-167064_1280.jpg"
          alt="img2"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/01/14/18/52/kempegowda-international-airport-245023_1280.jpg"
          alt="img3"
        />
      </div>
    </div>
  );
}

export default TopCity;
