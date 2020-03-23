import { connect } from 'react-redux';
import { fetchArtists } from '../actions/artists';
import Search from '../components/Search';

const mapStateToProps = (state: any) => ({
    artistList: state.artists.list,
    loading: state.artists.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchArtists: (query: string) => dispatch(fetchArtists(query))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)