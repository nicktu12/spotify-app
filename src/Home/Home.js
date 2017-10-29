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

	render(){
		return(
 			<div className='home-div'>
				<div className='hero-banner'>
					<h1>Top Artists</h1>
				</div>
				<ul>
					<li>Top Artist 1</li>
					<li>Top Artist 2</li>
					<li>Top Artist 3</li>
					<li>Top Artist 4</li>
			</ul>
			</div>
		)
	}

}

const mapDispatchToProps = dispatch => {
	return {
		saveAuthCode: (token) => dispatch(saveAuthCodeAction(token))
	}
}

export default connect(null, mapDispatchToProps)(Home);
