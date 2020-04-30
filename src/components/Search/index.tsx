import React, { useState } from 'react';
import useSWR from 'swr';
import ArtistResults from '../../containers/ArtistResults';
import { Artist } from '../../types/Artist';

const QUERY_INITIAL_STATE = '';

interface Props {
  fetchArtists: any;
  artistList: Array<Artist>
}

const Search = ({ fetchArtists, artistList }: Props ) => {
  
  const [input, setInput] = useState(QUERY_INITIAL_STATE);
  const [query, setQuery] = useState(QUERY_INITIAL_STATE);
  
  const shouldFetch = () => query !== QUERY_INITIAL_STATE;

  const fetcher = () => fetchArtists(query);

  useSWR(() => shouldFetch() ? `/api/artist/${query}` : null, fetcher);

  const setAndPrevent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setQuery(input);
  }
  
  return (
    <div>
      <form>
        <input type="text" placeholder="Search for a gig..." defaultValue={"incubu"} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={(e) => setAndPrevent(e)}>Search</button>
      </form>

      <div>Results</div>
        
      <div>
        <ArtistResults artists={artistList} />
      </div>
    </div>
  );
}

export default Search;
