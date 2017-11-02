import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSongsAction } from './Playlist-actions';

class Playlist extends React.Component{
  componentDidMount(){
    return this.props.topSongs.length ?
      null : 
      this.props.loadSongs(this.props.accessToken); 
  }

  renderSongs = (array) => (
    array.map((song, index) => (
      <li key={'top songs ' + index}>
        <span>{song.title}</span> 
        {song.artists}
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
        <ol>
          {this.props.topSongs && this.renderSongs(this.props.topSongs)}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  accessToken: store.accessToken,
  topSongs: store.topSongs
});

const mapDispatchToProps = dispatch => {
  return {
    loadSongs: (token) => dispatch(loadSongsAction(token))
  };
};

Playlist.propTypes = {
  topSongs: PropTypes.arrayOf(PropTypes.object),
  accessToken: PropTypes.string,
  loadSongs: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
