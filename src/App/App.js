import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import AnotherComp from '../AnotherComp/AnotherComp';
import Login from '../Login/Login';
import './App.scss';
import { accessTokenCleaner } from '../Utilities/helpers.js';

class App extends React.Component {

  componentDidMount(){
	const url = window.location.href
	if (url.includes('code')) {
		console.log(accessTokenCleaner(url))
	}
	if (url.includes('error')) {
		console.log('error')
	}
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">Top Artists</Link>
          <Link to="/another-page">Your Top 40</Link>
          <Link to="/login">Login</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/another-page" component={AnotherComp} />
          <Route exact path="/login" component={Login} />
        </main>
      </div>
    );
  }


}

const mapDispatchToProps = dispatch => {
	return {
		//		saveAccessToken: (token) => dispatch(saveAccessToken(token))
	}
}


export default connect(null, null)(App);
