import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authCodeCleaner } from '../Utilities/helpers';
import { saveAuthCodeAction } from './TopArtists-actions'; 
import { Meter } from '../Meter/Meter';

export class TopArtists extends React.Component{

  constructor(){
    super();

    this.state = {
      selected: null,
    };
  }

  componentDidMount(){
    const url = window.location.href;
    if (url.includes('code')) {
      this.props.authCodeToSagas(authCodeCleaner(url));
    } else if (url.includes('error')){
      alert('error with url');
    } else {
      this.redirectToLogin();
    }
  }

  renderTopArtists = (array) => (
    array.map((artist, index) => (
      <li 
        key={'top artists ' + index} 
        className={ 
          this.state.selected === index ? 
            'selected artists' : 
            'unselected artists' }
      >
        <button onClick={()=>this.addSelected(index)}>
          <span>{artist.name} 
            <span className='plus-icon'>+</span>
            <span className='minus-icon'>-</span>
          </span>
        </button>
      </li>
    ))      
  ) 

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

  redirectToLogin = () => {
    if (!this.props.token.length) {
      this.props.history.push('/login');
    }     
  } 

  showLoading = () => ( 
    !this.props.topArtists.length && 
    <img src={require('../Assets/bars.svg')} alt="loading icon"  />
  )

  renderRecentlyPlayed = (songArray) => (
    songArray.map(song => (
      <li>
        { song.title } - { song.artists }
      </li> 
    ))
  )

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
              <h5>Recently Played</h5>
              <ol className='recently-played-list'>
               { this.renderRecentlyPlayed(this.props.recentlyPlayed) }
              </ol>
            </span>
          }
        </p>
      </section>
      :
      <section>
        <h4>{info.name}</h4>
        <img src={info.photo.url} alt={info.name + ' photo'} />
        <div>
          <p>
            <span>Followers:</span> <span className='alt-text'>
              {info.followers}
            </span>
          </p>
          <p>
            <span>Popularity:</span> <span className='alt-text'>
              <Meter percent={info.popularity / 100} rounded={true} />
            </span>
          </p>
          <p>
            <span>Genres:</span> <span className='genres alt-text'>
              {info.genres}
            </span>
          </p>
        </div>
      </section>
  )

  render(){
    return (
      <div className='home-div'>
        { this.renderInfoCard(this.props.topArtists[this.state.selected]) }
        <h2>{this.showLoading()} Top Artists {this.showLoading()}</h2>
        <ol>
          { this.props.topArtists && 
            this.renderTopArtists(this.props.topArtists)
          }
        </ol>
      </div>
    );
  }

}

const mapStateToProps = store => ({
  topArtists: store.topArtists,
  userInfo: store.userInfo,
  token: store.accessToken,
  recentlyPlayed: store.recentlyPlayed,
});

const mapDispatchToProps = dispatch => {
  return {
    authCodeToSagas: (token) => dispatch(saveAuthCodeAction(token))
  };
};

TopArtists.propTypes = {
  authCodeToSagas: PropTypes.func,
  token: PropTypes.string,
  history: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  topArtists: PropTypes.arrayOf(PropTypes.object),
  userInfo: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists);
