import React from 'react';
import { connect } from 'react-redux';
import { loadSongsAction } from './Playlist-actions';

class Playlist extends React.Component{
	componentDidMount(){
		this.props.loadSongs(this.props.accessToken);	
	}
	
  renderSongs = (array) => (
  	array.map((song, index) => (
						<li key={'top songs ' + index}><span>{song.title}</span> {song.artists}</li>
  	))
  )

	render(){
		return(		
	    <div className='playlist-div'>
    		<h2>Your Top 40</h2>
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
