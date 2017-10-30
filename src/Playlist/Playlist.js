import React from 'react';
import { connect } from 'react-redux';
import { loadSongsAction } from './Playlist-actions';

class Playlist extends React.Component{
	constructor(){
		super()
	}
	componentDidMount(){
		this.props.loadSongs(this.props.accessToken);	
	}
	
  renderSongs = (array) => {
  	array.map((song, index) => (
  		<li></li>
  	))
  }

	render(){
		return(		
	    <div className='playlist-div'>
    		<h2>Your Top 40</h2>
      </div>
  	)
	}
}

const mapStateToProps = store => ({
	accessToken: store.accessToken
})

const mapDispatchToProps = dispatch => {
	return {
		loadSongs: (token) => dispatch(loadSongsAction(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
