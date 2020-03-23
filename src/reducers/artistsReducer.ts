import {
  FETCH_ARTISTS,
} from '../actions/artists';

export const initialState = {
  loading: true,
  list: [],
}


function artistsReducer (state = initialState, action: any) {
  switch (action.type) {
       
    case FETCH_ARTISTS: {
      
      const artists = action.payload;
      return {
        ...state,
        list: action.payload,
        loading: false,
      }
    }
    default:
      return state
  }
}

export default artistsReducer;