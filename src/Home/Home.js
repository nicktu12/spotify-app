import React from 'react';
import { connect } from 'react-redux';
import { authCodeCleaner } from '../Utilities/helpers';
import { saveAuthCodeAction } from './Home-actions'; 
import Meter from '../Meter/Meter';

class Home extends React.Component{

	constructor(){
		super();

		this.state = {
			selected: [],
		}
	}

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
						<li key={'top artists ' + index} onClick={()=>this.addSelected(index)} className={ this.state.selected.includes(index) ? 'selected artists' : 'unselected artists' }>
							<span>
								{artist.name} 
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

	addSelected = (index) => {
		!this.state.selected.length ? this.setState({ selected: [index]}) : null;
		this.state.selected.includes(index) ? this.setState({ selected: [] }) : this.setState({ selected: [index] });
	}

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
