import React from 'react';
import { connect } from 'react-redux';
import { authCodeCleaner } from '../Utilities/helpers';
import { saveAuthCodeAction } from './Home-actions'; 

class Home extends React.Component{
	componentDidMount(){
		const url = window.location.href
		if (url.includes('code')) {
			this.props.saveAuthCode(authCodeCleaner(url))			
		}
		if (url.includes('error')) {
			console.log('error')
		}
	}


	renderTopArtists = (array) => (
					array.map((artist, index) => (
						<li key={'top artists ' + index}>{artist.name}</li>
					))			
	) 

	render(){
		return(
		
 			<div className='home-div'>
			  <h2>Top Artists</h2>
				<ul>
					{this.props.topArtists && this.renderTopArtists(this.props.topArtists)}
			  </ul>
			</div>
		)
	}

}

const mapStateToProps = store => ({
	topArtists: store.topArtistsAction.topArtists
})

const mapDispatchToProps = dispatch => {
	return {
		saveAuthCode: (token) => dispatch(saveAuthCodeAction(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
