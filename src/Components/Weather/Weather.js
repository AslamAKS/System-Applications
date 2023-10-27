import React, { useEffect, useState } from "react";
import axios from "axios";
import MainCity from "./MainCity/MainCity";

function Weather() {
  
  const [token, setToken] = useState();

  useEffect(() => {
    const username = "resemblesystems_ali_aslam";
    const password = "N77p8UuKiB";
    axios({
      method: "get",
      url: "https://login.meteomatics.com/api/v1/token",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    })
      .then((response) => {
        const token_auth = response.data.access_token;
        console.log("token", token_auth);
        setToken(token_auth);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);
  return (
    <div>
      <MainCity token={token} />
    </div>
  );
}

export default Weather;
