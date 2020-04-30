import { combineReducers } from 'redux'
import artistsReducer from './artistsReducer';
import concertReducer from './concertReducer';

const allReducers = combineReducers({
  artists: artistsReducer,
  concert: concertReducer,
})

export default allReducers