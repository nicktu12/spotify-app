import React from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase.js';
import { testClickAction, handleLoginAction } from './Login-actions.js'; 

class Login extends React.Component {

  render(){
    return(
			<div className='login-div'>
				<h2>Statify</h2>
				<div>
					<p>To see your Spotify listening statistics, please sign in to Spotify belew</p>
		  		<a href='https://accounts.spotify.com/authorize/?client_id=6f67e11fa50a413f9bf17697789322aa&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-private%20user-read-email%20user-top-read&state=34fFs29kd09'> 
						<button>LOGIN</button>
				 	</a>
			 	</div>
			</div>
    )
  }
}

export default connect(null, null)(Login);
