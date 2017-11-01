import React from 'react';
import { connect } from 'react-redux';
import { authCodeCleaner } from '../Utilities/helpers';
import { saveAuthCodeAction } from './Home-actions'; 

class Home extends React.Component{
	componentDidMount(){
		const url = window.location.href
		if (url.includes('code')) {
			this.props.saveAuthCode(authCodeCleaner(url))			
		} else if (url.includes('error')){
			console.log('error with url')
		} else {
			this.renderRedirect();
		}
	}

	renderTopArtists = (array) => (
		array.map((artist, index) => (
			<li key={'top artists ' + index}><span>{artist.name}</span></li>
		))			
	) 

	renderRedirect = () => {
		if (!this.props.token.length) {
				this.props.history.push('/login')
		}			
	} 

				showLoading = () => ( !this.props.topArtists && <img src={require('../Assets/bars.svg')}  /> )

	render(){
		return(
		
 			<div className='home-div'>
			  <h2>Top Artists {this.showLoading()}</h2>
				<ol>
					{this.props.topArtists && this.renderTopArtists(this.props.topArtists)}
			  </ol>
			</div>
		)
	}

}

const mapStateToProps = store => ({
	topArtists: store.topArtistsAction.topArtists,
	token: store.accessToken
})

const mapDispatchToProps = dispatch => {
	return {
		saveAuthCode: (token) => dispatch(saveAuthCodeAction(token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
