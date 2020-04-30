export const SET_CONCERT = 'SET_CONCERT';

export const setConcert = (concert: string) => ({
  type: SET_CONCERT,
  payload: concert
});

export default setConcert;