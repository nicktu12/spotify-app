import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSongsAction, loadSongsShortTerm, loadSongsAllTime } from './Playlist-actions';

class Playlist extends React.Component{
  componentDidMount(){
    if (this.props.match.path === '/top40/month') {
      return this.props.topSongsShortTerm.length ?
        null :
        this.props.loadSongsShortTerm(this.props.accessToken)
    }
    if (this.props.match.path === '/top40') {
      return this.props.topSongs.length ?
        null : 
        this.props.loadSongs(this.props.accessToken); 
    }
    if (this.props.match.path === '/top40/alltime') {
      return this.props.topSongsAllTime.length ?
        null : 
        this.props.loadSongsAllTime(this.props.accessToken); 
    }
  }

  renderSongs = () => {
    if (this.props.match.path === '/top40') {
        return this.props.topSongs.map((song, index) => (
          <li key={'top songs ' + index}>
            <span>{song.title}</span> {song.artists}
          </li>
      ))
    }
    if (this.props.match.path === '/top40/month') {
        return this.props.topSongsShortTerm.map((song, index) => (
          <li key={'top songs ' + index}>
            <span>{song.title}</span> {song.artists}
          </li>
      ))
    }
    if (this.props.match.path === '/top40/alltime') {
        return this.props.topSongsAllTime.map((song, index) => (
          <li key={'top songs ' + index}>
            <span>{song.title}</span> {song.artists}
          </li>
      ))
    }
  }

  showLoading = () => { 
    if (this.props.match.path === '/top40/month') {
      return this.props.topSongsShortTerm.length ?
        null :
        <img src={require('../Assets/bars.svg')} alt="loading icon" />
    }
    if (this.props.match.path === '/top40') {
      return this.props.topSongs.length ?
        null : 
        <img src={require('../Assets/bars.svg')} alt="loading icon" /> 
    }
    if (this.props.match.path === '/top40/alltime') {
      return this.props.topSongsAllTime.length ?
        null : 
        <img src={require('../Assets/bars.svg')} alt="loading icon" />
    }
  }

  determineClass = (path) =>  {
    if (path === null) {
      return window.location.href === "http://localhost:3000/top40"
    }
    return window.location.href.includes(path) 
  }

  render(){
    return (   
      <div className='playlist-div'>
        <h2>
          Top 40 {this.showLoading()}
          <p className={this.determineClass('month') ? 'playlist-path-active' : null} onClick={()=>this.props.history.push('/top40/month')}>This month</p>
          <p className={this.determineClass(null) ? 'playlist-path-active' : null} onClick={()=>this.props.history.push('/top40')}>This year</p>
          <p className={this.determineClass('alltime') ? 'playlist-path-active' : null} onClick={()=>this.props.history.push('/top40/alltime')}>All Time</p>
        </h2>
        <ol>
          {this.props.topSongs && this.renderSongs()}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  accessToken: store.accessToken,
  topSongs: store.topSongs,
  topSongsShortTerm: store.topSongsShortTerm,
  topSongsAllTime: store.topSongsAllTime,
});

const mapDispatchToProps = dispatch => {
  return {
    loadSongs: (token) => dispatch(loadSongsAction(token)),
    loadSongsShortTerm: (token) => dispatch(loadSongsShortTerm(token)),
    loadSongsAllTime: (token) => dispatch(loadSongsAllTime(token)),
  };
};

Playlist.propTypes = {
  topSongs: PropTypes.arrayOf(PropTypes.object),
  accessToken: PropTypes.string,
  loadSongs: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
