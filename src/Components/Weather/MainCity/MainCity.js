import React, { useEffect, useState } from "react";
import axios from "axios";

function MainCity(props) {
  const [temp, setTemp] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.meteomatics.com/2023-10-19T00:00:00Z/t_2m:C,sunrise:sql,sunset:sql/9.9312,76.2673/json?access_token=${props.token}`
      )
      .then((responce) => {
        setTemp(responce.data.data[0].coordinates[0].dates[0].value);
        setSunrise(responce.data.data[1].coordinates[0].dates[0].value);
        setSunset(responce.data.data[2].coordinates[0].dates[0].value);
      })
      .catch((err) => {
        console.log("error is...", err);
      });
  });

  return (
    <div>
      <h1>location</h1>
      <h1>{temp} 'C</h1>
      <h3>
        SunRise : {new Date(sunrise).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h3>
      <h3>SunSet : {new Date(sunset).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        })}</h3>
    </div>
  );
}

export default MainCity;
