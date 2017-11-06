import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  loadSongsAction, 
  loadSongsShortTerm, 
  loadSongsAllTime, 
} from './Playlist-actions';

class Playlist extends React.Component{
  componentDidMount(){
    if (!this.props.accessToken.length) {
      this.props.history.push('/login');
      return;
    }
    if (this.props.match.path === '/top40/month') {
      return this.props.topSongsShortTerm.length ?
        null :
        this.props.loadSongsShortTerm(this.props.accessToken);
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
      ));
    }
    if (this.props.match.path === '/top40/month') {
      return this.props.topSongsShortTerm.map((song, index) => (
        <li key={'top songs ' + index}>
          <span>{song.title}</span> {song.artists}
        </li>
      ));
    }
    if (this.props.match.path === '/top40/alltime') {
      return this.props.topSongsAllTime.map((song, index) => (
        <li key={'top songs ' + index}>
          <span>{song.title}</span> {song.artists}
        </li>
      ));
    }
  }

  showLoading = () => { 
    if (this.props.match.path === '/top40/month') {
      return this.props.topSongsShortTerm.length ?
        null :
        <img src={require('../Assets/bars.svg')} alt="loading icon" />;
    }
    if (this.props.match.path === '/top40') {
      return this.props.topSongs.length ?
        null : 
        <img src={require('../Assets/bars.svg')} alt="loading icon" />;
    }
    if (this.props.match.path === '/top40/alltime') {
      return this.props.topSongsAllTime.length ?
        null : 
        <img src={require('../Assets/bars.svg')} alt="loading icon" />;
    }
  }

  determineClass = (path) =>  {
    if (path === null) {
      return window.location.href === "http://localhost:3000/top40";
    }
    return window.location.href.includes(path);
  }

  render(){
    return (   
      <div className='playlist-div'>
        <h2>
          {this.showLoading()} Top 40 {this.showLoading()}
          <div>
            <button 
              className={
                this.determineClass('month') ? 
                  'playlist-path-active' : 
                  null
              } 
              onClick={()=>this.props.history.push('/top40/month')}>
              This month
            </button>
            <button 
              className={
                this.determineClass(null) ? 
                  'playlist-path-active' : 
                  null
              } 
              onClick={()=>this.props.history.push('/top40')}>
               This year
            </button>
            <button 
              className={
                this.determineClass('alltime') ? 
                  'playlist-path-active' : 
                  null
              } 
              onClick={()=>this.props.history.push('/top40/alltime')}>
                All Time
            </button>
          </div>
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
  accessToken: PropTypes.string,
  match: PropTypes.object,
  topSongsShortTerm: PropTypes.arrayOf(PropTypes.object),
  topSongs: PropTypes.arrayOf(PropTypes.object),
  topSongsAllTime: PropTypes.arrayOf(PropTypes.object),
  loadSongs: PropTypes.func,
  loadSongsShortTerm: PropTypes.func,
  loadSongsAllTime: PropTypes.func,
  history: PropTypes.oneOfType([PropTypes.object]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
