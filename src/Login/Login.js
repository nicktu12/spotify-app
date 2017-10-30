import React from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase.js';
import { testClickAction, handleLoginAction } from './Login-actions.js'; 

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      song: '',
      items: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
	newState.push({
	  id: item, 
	  title: items[item].song,
	  user: items[item].user
	});
      }
      this.setState({
	items: newState
      })
    })
    console.log(window.location.href)
  }

  handleInput = (e) => {
    this.setState({
	[e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      song: this.state.song,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      username: '',
      song: ''
    });
  }

  removeItem = (itemId) => {
    const itemsRef = firebase.database().ref(`/items/${itemId}`);
    itemsRef.remove();
  }

  testClick = () => {
    console.log('test click');
    this.props.handleTestClick('help');
  }

  loginClick = () => {
    console.log('handle login');
    this.props.handleLogin();
  }

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

const mapDispatchToProps = dispatch => {
  return {    
    handleTestClick: () => dispatch(testClickAction()),
    handleLogin: () => dispatch(handleLoginAction())
  }
}

export default connect(null, mapDispatchToProps)(Login);
