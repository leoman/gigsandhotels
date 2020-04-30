import RequestService from './requestService';

const SONG_KICK_API_URL = "https://api.songkick.com/api/";
const SONG_KICK_API_VERSION = "3.0";
const API_KEY = "WewWUhkws9IU4phb";

class NetworkService {

  requestService: RequestService;

  constructor() {
    this.requestService = new RequestService();
  }

  getArtist(artist: string) {
    const url = `${SONG_KICK_API_URL}${SONG_KICK_API_VERSION}/search/artists.json?apikey=${API_KEY}&query=${artist}`;
    return this.requestService.get(url);
  }

  getArtistsConcerts(artistName: string) {
    const url = `${SONG_KICK_API_URL}${SONG_KICK_API_VERSION}/events.json?apikey=${API_KEY}&artist_name=${artistName}`;
    return this.requestService.get(url);
  }

}

export default new NetworkService()