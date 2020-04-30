import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_CONCERTS,
} from '../actions/artists';
import { Artist } from '../types/Artist';

interface State {
  loading: boolean;
  list: Array<Artist>;
  selectedArtist: undefined | string;
  events: Array<{}>;
}

export const initialState: State = {
  loading: true,
  list: [],
  selectedArtist: undefined,
  events: [],
}


function artistsReducer (state = initialState, action: any) {
  switch (action.type) {
       
    case FETCH_ARTISTS: {
      
      const { payload } = action;
      return {
        ...state,
        list: payload,
        loading: false,
      }
    }

    case FETCH_ARTISTS_CONCERTS: {

      const { payload: { artistName, events } } = action;
      return {
        ...state,
        selectedArtist: artistName,
        events,
      }
    }

    default:
      return state
  }
}

export default artistsReducer;