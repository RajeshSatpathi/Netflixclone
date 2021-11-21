import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import requests from "./requests";
import "./Banner.css";
function Banner() {
  const [Movie, SetMovie] = useState([]);

  useEffect(() => {
    async function fatchData() {
      const request = await axios.get(requests.netflixOriginal);
      SetMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fatchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {Movie?.title || Movie?.name || Movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h2 className="banner_description">{Movie?.overview}</h2>
      </div>
    </header>
  );
}

export default Banner;
