import React, { useState } from 'react';
import NetworkService from '../../services/networkService';
import ArtistResults from '../ArtistResults';
import GigResults from '../GigResults';
const searchForArtist = async (artist: string) => await NetworkService.getArtist(artist);

const Search = ({ fetchArtists, artistList, loading }: any) => {
  
  const [query, setQuery] = useState('');
  const [artistResults, setArtistResults] = useState([]);

  const search = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(query.length > 3) {

      fetchArtists(query)

      // const data = await searchForArtist(query);
      // const { resultsPage : { results: { artist } } } = data;
      // console.log(artist);
      // setArtistResults(artist);
    }
  }

  console.log('####', artistResults);
  
  return (
    <div>
      <p>Current query: {query}</p>
      <form>
        <input type="text" placeholder="Search for a gig..." defaultValue={"incubu"} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" onClick={(e) => search(e)}>Search</button>
      </form>

      <div>Results</div>
        
      <div>
        <ArtistResults artists={artistList} />
        <GigResults />
      </div>
    </div>
  );
}

export default Search;
