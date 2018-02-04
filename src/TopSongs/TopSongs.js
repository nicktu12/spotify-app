import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Meter } from '../Meter/Meter';
import { 
  loadSongsAction, 
  postPlaylist,
} from './TopSongs-actions';

export class TopSongs extends React.Component{

  constructor(){
    super();

    this.state = {
      selected: null,
    };
  } 

  componentDidMount(){
    if (!this.props.accessToken.length) {
      this.props.history.push('/login');
      return;
    } else {
      return this.props.topSongs.length ?
        null : 
        this.props.loadSongs(this.props.accessToken); 
    }
  }

  renderSongs = () => {
    if (this.props.match.path === '/top40') {
      return this.props.topSongs[1].map((song, index) => (
        <li 
          key={'top songs ' + index}
          className={
            this.state.selected === index ?
              'selected songs' :
              'unselected songs' }
        >
          <button onClick={()=>this.addSelected(index)}>
            <span>{song.title}</span> {song.artists}
            <span className='plus-icon'>+</span>
            <span className='minus-icon'>-</span>
          </button>
        </li>
      ));
    }
    if (this.props.match.path === '/top40/month') {
      return this.props.topSongs[0].map((song, index) => (
        <li key={'top songs ' + index}className={
          this.state.selected === index ?
            'selected songs' :
            'unselected songs' }
        >
        
          <button onClick={()=>this.addSelected(index)}>
            <span>{song.title}</span> {song.artists}
            <span className='plus-icon'>+</span>
            <span className='minus-icon'>-</span>
          </button>
        </li>
      ));
    }
    if (this.props.match.path === '/top40/alltime') {
      return this.props.topSongs[2].map((song, index) => (
        <li key={'top songs ' + index}className={
          this.state.selected === index ?
            'selected songs' :
            'unselected songs' }
        >
          <button onClick={()=>this.addSelected(index)}>
            <span>{song.title}</span> {song.artists}
            <span className='plus-icon'>+</span>
            <span className='minus-icon'>-</span>
          </button>
        </li>
      ));
    }
  }

  addSelected = (index) => (
    this.state.selected === null ? 
      this.setState({ selected: index}) : 
      this.updateSelected(index)
  )

  updateSelected = (index) => {
    this.state.selected === index ?
      this.setState({ selected: null }) :
      this.setState({ selected: index });
  }


  showLoading = () => (
    this.props.topSongs.length ?
      null : 
      <img src={require('../Assets/bars.svg')} alt="loading icon" />
  )

  determineClass = (path) =>  {
    if (path === null) {
      return window.location.href === "http://localhost:3000/top40";
    }
    return window.location.href.includes(path);
  }

  renderRecentlyPlayed = (songArray) => (
    songArray.map((song, index) => (
      <li key={index + song.title}>
        { song.title } - { song.artists }
      </li> 
    ))
  )

  renderUserInfo = () => (
    <section>
      <h4>{this.props.userInfo.name}</h4>
      {
        this.props.userInfo.image &&
        <img src={this.props.userInfo.image} alt='user' />
      }
      <p className='user-info'>
        {
          this.props.userInfo.followers &&
          <span>
            <h5>Recently Played</h5>
            <ol className='recently-played-list'>
              { this.renderRecentlyPlayed(this.props.recentlyPlayed) }
            </ol>
          </span>
        }
      </p>
    </section>
  )

  renderInfoCard = (info) => (
    info === undefined ?
      this.renderUserInfo()
      :
      <section>
        <h4>{info.title}</h4>
        <img src={info.image} alt={info.album + 'album art'} />
        <div>
          <p>
            <span>Album:</span> <span className='alt-text'>
              {info.album}
            </span>
          </p>
          <p>
            <span>Artist:</span> <span className='alt-text'>
              {info.artists}
            </span>
          </p>
          <p>
            <span>Popularity:</span> <span className='alt-text'>
              <Meter percent={info.popularity / 100} rounded={true} />
            </span>
          </p>
        </div>
      </section>
  )

  renderInfoCardSwitch = (path) => {
    if (!this.props.topSongs.length) {
      return this.renderUserInfo();
    }
    if (path === '/top40') {
      return this.renderInfoCard(
        this.props.topSongs[1][this.state.selected]
      );
    }
    if (path === '/top40/month') {
      return this.renderInfoCard(
        this.props.topSongs[0][this.state.selected]
      );
    }
    if (path === '/top40/alltime') {
      return this.renderInfoCard(
        this.props.topSongs[2][this.state.selected]
      );
    }
  }

  postPlaylist = (path) => {
    if (path === '/top40') {
      this.props.postPlaylist(
        this.props.accessToken, 
        this.props.userInfo.id, 
        this.getSongUriArray(this.props.topSongs[1]),
        '(for this year)'
      );
      this.disableBtn();
    }
    if (path === '/top40/month') {
      this.props.postPlaylist(
        this.props.accessToken, 
        this.props.userInfo.id, 
        this.getSongUriArray(this.props.topSongs[0]),
        '(for this month)'
      );
      this.disableBtn();
    }
    if (path === '/top40/alltime') {
      this.props.postPlaylist(
        this.props.accessToken, 
        this.props.userInfo.id, 
        this.getSongUriArray(this.props.topSongs[2]),
        '(of all time!)'
      );
      this.disableBtn();
    }
  }

  getSongUriArray = songs => songs.map(song=>(song.uri));

  disableBtn = () => this.refs.btn.setAttribute('disabled', 'disabled');

  render(){
    return (   
      <div className='playlist-div'>
        { this.renderInfoCardSwitch(this.props.match.path) }
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
        <button 
          ref="btn"
          onClick={()=>this.postPlaylist(this.props.match.path)}
          className={'post-btn display-post-btn'}
        >
          Add to Spotify
        </button>
        <ol>
          { this.props.topSongs.length ? this.renderSongs() : null}
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
  userInfo: store.userInfo,
  recentlyPlayed: store.recentlyPlayed,
});

const mapDispatchToProps = dispatch => {
  return {
    loadSongs: (token) => dispatch(loadSongsAction(token)),
    postPlaylist: (token, id, array, message) => dispatch(postPlaylist(token, id, array, message))
  };
};

TopSongs.propTypes = {
  accessToken: PropTypes.string,
  match: PropTypes.object,
  recentlyPlayed: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object), PropTypes.object
  ]),
  topSongs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  loadSongs: PropTypes.func,
  history: PropTypes.oneOfType([PropTypes.object]),
  userInfo: PropTypes.object,
  postPlaylist: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSongs);
