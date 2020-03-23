import React from 'react';

const ArtistResults = ({ artists } : any) => {
  console.log(artists);
  return (
  <div>
    {artists && artists.map(((result: any, i: number) => (
      <div key={i}>
        <p>Name: {result.displayName}</p>
      </div>
    )))}
  </div>
)};

export default ArtistResults;