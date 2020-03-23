import NetworkService from '../services/networkService';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';

export const fetchArtists = (query: string) => async (dispatch: any) => {
    
    const data = await NetworkService.getArtist(query);
    const { resultsPage : { results: { artist } } } = data;
    console.log(artist);

    dispatch({
        type: FETCH_ARTISTS,
        payload: artist
    });
}