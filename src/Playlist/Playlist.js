import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSongsAction, loadSongsShortTerm } from './Playlist-actions';

class Playlist extends React.Component{
  componentDidMount(){
    if (this.props.match.path === '/top40/month') {
      console.log(this.props.topSongsShortTerm.length)
      return this.props.topSongsShortTerm.length ?
        null :
        this.props.loadSongsShortTerm(this.props.accessToken)
    }
    if (this.props.match.path === '/top40') {
      return this.props.topSongs.length ?
        null : 
        this.props.loadSongs(this.props.accessToken); 
    }
  }

  renderSongs = (array) => (
    array.map((song, index) => (
      <li key={'top songs ' + index}>
        <span>{song.title}</span> {song.artists}
      </li>
    ))
  )

  showLoading = () => ( 
    !this.props.topSongs.length && 
    <img src={require('../Assets/bars.svg')} alt="loading icon" />
  )

  render(){
    return (   
      <div className='playlist-div'>
        <h2>Top 40 {this.showLoading()}</h2>
        <button onClick={()=>this.props.history.push('/top40/month')}>Next page</button>
        <ol>
          {this.props.topSongs && this.renderSongs(this.props.topSongs)}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  accessToken: store.accessToken,
  topSongs: store.topSongs,
  topSongsShortTerm: store.topSongsShortTerm,
});

const mapDispatchToProps = dispatch => {
  return {
    loadSongs: (token) => dispatch(loadSongsAction(token)),
    loadSongsShortTerm: (token) => dispatch(loadSongsShortTerm(token))
  };
};

Playlist.propTypes = {
  topSongs: PropTypes.arrayOf(PropTypes.object),
  accessToken: PropTypes.string,
  loadSongs: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
