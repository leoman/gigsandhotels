import { connect } from 'react-redux';
import { setConcert } from '../actions/concert';
import GigsResults from '../components/GigsResults';

const mapStateToProps = (state: any) => ({
  selectedArtist: state.artists.selectedArtist,
  events: state.artists.events
});

const mapDispatchToProps = (dispatch: any) => ({
  setConcert: (event: any) => dispatch(setConcert(event))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigsResults)