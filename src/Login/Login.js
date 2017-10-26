import React from 'react';
import { connect } from 'react-redux';
import '../firebase.js';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      song: ''      
    }
  }

  handleInput = (e) => {
    this.setState({
	[e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <div className="container">
	  <div id="login">
	    <h1>Heyo this is nick's super crazy spotify application test login yo</h1>
	    <a href="/login" className="btn btn-primary">Log in with Spotify THIS WILL REFRESH PAGE</a> 
	  </div>
	  <div id="loggedin">
	    <div id="user-profile">
	    </div>
	    <div id="oauth">
	    </div>
	    <button className="btn btn-default" id="obtain-new-token">Obtain new token using the refresh token THIS DOES NOTHING</button>
	  </div>
	</div>
	<div>
	  <form onSubmit={this.handleSubmit}>
	    <p>FORM</p>
	    <input type="text" name="username" placeholder="What yo name?" onChange={this.handleInput} value={this.state.username} />
	    <input type="text" name="song" placeholder="song?" onChange={this.handleInput} value={this.state.song} />
	    <button>IMABUTTON</button>
	  </form>
        </div>
        <section className="display-item">
          <div className="wrapper">
	    <ul>
	    </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Login;
