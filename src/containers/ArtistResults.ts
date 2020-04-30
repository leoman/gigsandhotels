import { connect } from 'react-redux';
import { fetchArtistsConcerts } from '../actions/artists';
import ArtistResults from '../components/ArtistResults';

const mapDispatchToProps = (dispatch: any) => ({
  fetchArtistsConcerts: (artistName: string) => dispatch(fetchArtistsConcerts(artistName))
})

export default connect(
    null,
    mapDispatchToProps
)(ArtistResults)