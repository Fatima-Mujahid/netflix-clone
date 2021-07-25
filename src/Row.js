import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css'

export default function Row({ title, fetchURL }) {
  const baseImageURL = 'https://image.tmdb.org/t/p';
  const imageSize = 'w500';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="row">
        {movies.map(function (movie) {
          return (
            movie.poster_path && <img
              className="row__image"
              src={`${baseImageURL}/${imageSize}/${movie.poster_path}`}
              alt={movie.title ? movie.title : movie.name}
            />
          );
        })}
        {console.log(movies)}
      </div>
    </div>
  );
}
