import React from 'react';
import { useHistory } from "react-router-dom";
import { Artist } from '../../types/Artist';

export default function ArtistResults({ artists, fetchArtistsConcerts } : any) {

  const history = useHistory();

  const fetchConcerts = async (displayName: string) => {
    await fetchArtistsConcerts(displayName);
    // TODO make the await better, check for status or something
    history.push("/gigs");
  }

  return (
    <div>
      {artists && artists.map(((result: Artist, i: number) => (
        <div key={i}>
          <p>Name: {result.displayName}</p>
          <button onClick={() => fetchConcerts(result.displayName)}>View gigs for this artist</button>
        </div>
      )))}
    </div>
  );
};