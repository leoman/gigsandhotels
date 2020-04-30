import NetworkService from '../services/networkService';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const FETCH_ARTISTS_CONCERTS = 'FETCH_ARTISTS_CONCERTS';

export const fetchArtists = (query: string) => async (dispatch: any) => {
    
  const data = await NetworkService.getArtist(query);
  console.log('fetchArtists');
  try {
    const { resultsPage : { results: { artist } } } = data;
    console.log(artist);
    dispatch({
        type: FETCH_ARTISTS,
        payload: artist
    });

    return data;
  } catch (e) {
    console.log(e);
  }
}

export const fetchArtistsConcerts = (artistName: string) => async (dispatch: any) => {

  const data = await NetworkService.getArtistsConcerts(artistName);
  const { resultsPage : { results: { event } } } = data;

  return dispatch({
      type: FETCH_ARTISTS_CONCERTS,
      payload: {
        artistName,
        events: event
      }
  });

}