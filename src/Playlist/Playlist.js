import React from 'react';
import { connect } from 'react-redux';
import { loadSongsAction } from './Playlist-actions';
import { cleanArtistsArray } from '../Utilities/helpers';

class Playlist extends React.Component{
	componentDidMount(){
		this.props.loadSongs(this.props.accessToken);	
	}
	
				// map state to props
				// last updated at...
				// for not calling api every time component mounts

  renderSongs = (array) => (
  	array.map((song, index) => (
			<li key={'top songs ' + index}><span>{song.title}</span> {cleanArtistsArray(song.artists)}</li>
  	))
  )

	showLoading = () => ( !this.props.topSongs.length && <img src={require('../Assets/bars.svg')}  /> )

	render(){
		return(		
	    <div className='playlist-div'>
    		<h2>Your Top 40 {this.showLoading()}</h2>
				<ol>
					{this.props.topSongs && this.renderSongs(this.props.topSongs)}
				</ol>
      </div>
  	)
	}
}

const mapStateToProps = store => ({
	accessToken: store.accessToken,
	topSongs: store.topSongs
})

const mapDispatchToProps = dispatch => {
	return {
		loadSongs: (token) => dispatch(loadSongsAction(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
