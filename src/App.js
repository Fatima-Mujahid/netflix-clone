import React from 'react'
import Row from './Row'
import requests from './requests'

export default function App() {
  return (
    <div>
      App
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      {/* <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
      /> */}
    </div>
  );
}
