import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

export default function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
      }}
    >
      <h2 className="banner__title">{movie.name}</h2>
      <button className="banner__button">Play</button>
      <button className="banner__button">My List</button>
      <p className="banner__description">
        {movie.overview && movie.overview.substr(0, 150)}
        {movie.overview && movie.overview.length >= 150 && '...'}
      </p>
    </div>
  );
}
