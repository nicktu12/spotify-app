import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
	
    }
  }

  render(){
    return(
      <div>
        <div class="container">
      <div id="login">
	<h1>Heyo this is nick's super crazy spotify application test login yo</h1>
        <a href="/login" class="btn btn-primary">Log in with Spotify</a>
      </div>
      <div id="loggedin">
        <div id="user-profile">
        </div>
        <div id="oauth">
        </div>
        <button class="btn btn-default" id="obtain-new-token">Obtain new token using the refresh token</button>
      </div>
    </div>

      </div>
    )
  }
}

export default Login;
