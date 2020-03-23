import { combineReducers } from 'redux'
import artistsReducer from './artistsReducer';

const allReducers = combineReducers({
  artists: artistsReducer,
})

export default allReducers