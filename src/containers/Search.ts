import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtists } from '../actions/artists';
import Search from '../components/Search';

const mapStateToProps = (state: any) => ({
    artistList: state.artists.list,
    loading: state.artists.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchArtists: (query: string) => dispatch(fetchArtists(query))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Search));