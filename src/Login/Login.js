import React from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase.js';
import { testClickAction } from './Login-actions.js'; 

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
	    <button className="btn btn-default" id="obtain-new-token" onClick={()=>this.testClick()}>Obtain new token using the refresh token THIS DOES NOTHING</button>
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
	      {this.state.items.map( (item, index)  => (
		<li key={index}>
		  <h2>{item.title}</h2>
		  <p>{item.user}</p>
		  <button onClick={() => this.removeItem(item.id)}>Go away</button>
		</li>
	      ))}
	    </ul>
          </div>
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleTestClick: (string) => {
    dispatch(testClickAction(string));
  }
})

export default connect(null, mapDispatchToProps)(Login);
