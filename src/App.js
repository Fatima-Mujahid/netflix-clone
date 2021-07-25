import React from 'react';
import Row from './Row';
import requests from './requests';

export default function App() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}
