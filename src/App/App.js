import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Playlist from '../Playlist/Playlist';
import Login from '../Login/Login';
import './App.scss';

const App = () => (
  <div className="App">
    <header>
      <Link to="/">Top Artists</Link>
      <Link to="/top40">Your Top 40</Link>
      <Link to="/login">Login</Link>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/top40" component={Playlist} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
);

export default App;
