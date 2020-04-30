import {
  SET_CONCERT,
} from '../actions/concert';
// import { Artist } from '../types/Artist';

// interface State {
//   loading: boolean;
//   list: Array<Artist>;
//   selectedArtist: undefined | string;
//   events: Array<{}>;
// }

export const initialState = {
  event: undefined,
}


function concertsReducer (state = initialState, action: any) {
  switch (action.type) {
       
    case SET_CONCERT: {
      
      const { payload } = action;
      return {
        ...state,
        event: payload
      }
    }

    default:
      return state
  }
}

export default concertsReducer;