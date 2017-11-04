import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authCodeCleaner } from '../Utilities/helpers';
import { saveAuthCodeAction } from './Home-actions'; 
import Meter from '../Meter/Meter';

class Home extends React.Component{

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
      console.log('error with url')
    } else {
      this.redirectToLogin();
    }
  }

  renderTopArtists = (array) => (
    array.map((artist, index) => (
      <li key={'top artists ' + index} onClick={()=>this.addSelected(index)} className={ this.state.selected === index ? 'selected artists' : 'unselected artists' }>
        <span>{artist.name} 
          <span className='plus-icon'>+</span>
          <span className='minus-icon'>-</span>
        </span>
        <img src={artist.photo.url} alt={artist.name + ' photo'} />
        <div>
          <p><span>Followers:</span> <span className='indent'>{artist.followers}</span></p>
          <p><span>Popularity:</span> <span className='indent'><Meter percent={artist.popularity / 100} rounded={false} /></span></p>
          <p><span>Genres:</span> <span className='genres indent'>{artist.genres}</span></p>
        </div>
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
      this.setState({ selected: index })
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

  renderInfoCard = (info) => (
    info === undefined ?
      <section><p>heyyy</p></section> :
      console.log(info)
  )

  render(){
    return (
      <div className='home-div'>
        { this.renderInfoCard(this.props.topArtists[this.state.selected]) }
        <h2>Top Artists {this.showLoading()}</h2>
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
  token: store.accessToken
});

const mapDispatchToProps = dispatch => {
  return {
    authCodeToSagas: (token) => dispatch(saveAuthCodeAction(token))
  };
};

Home.propTypes = {
  authCodeToSagas: PropTypes.func,
  token: PropTypes.string,
  history: PropTypes.object,
  topArtists: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
