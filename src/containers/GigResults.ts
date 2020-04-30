import { connect } from 'react-redux';
import GigResults from '../components/GigResults';

const mapStateToProps = (state: any) => ({
  selectedArtist: state.artists.selectedArtist,
  events: state.artists.events
});

export default connect(
  mapStateToProps,
  null
)(GigResults)