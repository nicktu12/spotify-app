import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Meter } from '../Meter/Meter';
import { 
  loadSongsAction, 
  loadSongsShortTerm, 
  loadSongsAllTime, 
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
        <li 
          key={'top songs ' + index}
          className={
            this.state.selected === index ?
              'selected songs' :
              'unselected songs' }
        >
          <button onClick={()=>this.addSelected(index)}>
            <span>{song.title}</span> {song.artists}
          </button>
        </li>
      ));
    }
    if (this.props.match.path === '/top40/month') {
      return this.props.topSongsShortTerm.map((song, index) => (
        <li key={'top songs ' + index}>
          <button onClick={()=>this.addSelected(index)}>
            <span>{song.title}</span> {song.artists}
          </button>
        </li>
      ));
    }
    if (this.props.match.path === '/top40/alltime') {
      return this.props.topSongsAllTime.map((song, index) => (
        <li key={'top songs ' + index}>
          <button onClick={()=>this.addSelected(index)}>
            <span>{song.title}</span> {song.artists}
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

  renderInfoCard = (info) => (
    info === undefined ?
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
              <span>Followers:</span> <span className='alt-text'>
                {this.props.userInfo.followers}
              </span>
            </span>
          }
        </p>
      </section>
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
    if (path === '/top40') {
      return this.renderInfoCard(this.props.topSongs[this.state.selected])
    }
    if (path === '/top40/month') {
      return this.renderInfoCard(this.props.topSongsShortTerm[this.state.selected])
    }
    if (path === '/top40/alltime') {
      return this.renderInfoCard(this.props.topSongsAllTime[this.state.selected])
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
          onClick={()=>{
            this.props.postPlaylist(this.props.accessToken, this.props.userInfo.id, this.getSongUriArray(this.props.topSongs))
            this.disableBtn()
          }}
          className={this.props.match.path === '/top40' ? 'post-btn display-post-btn' : 'post-btn'}
        >
          Add to Spotify
        </button>
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
  userInfo: store.userInfo,
});

const mapDispatchToProps = dispatch => {
  return {
    loadSongs: (token) => dispatch(loadSongsAction(token)),
    loadSongsShortTerm: (token) => dispatch(loadSongsShortTerm(token)),
    loadSongsAllTime: (token) => dispatch(loadSongsAllTime(token)),
    postPlaylist: (token, id, array) => dispatch(postPlaylist(token, id, array))
  };
};

TopSongs.propTypes = {
  accessToken: PropTypes.string,
  match: PropTypes.object,
  topSongsShortTerm: PropTypes.arrayOf(PropTypes.object),
  topSongs: PropTypes.arrayOf(PropTypes.object),
  topSongsAllTime: PropTypes.arrayOf(PropTypes.object),
  loadSongs: PropTypes.func,
  loadSongsShortTerm: PropTypes.func,
  loadSongsAllTime: PropTypes.func,
  history: PropTypes.oneOfType([PropTypes.object]),
  userInfo: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSongs);
