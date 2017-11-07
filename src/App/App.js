import React from 'react';
import { Route, Link } from 'react-router-dom';
import TopArtists from '../TopArtists/TopArtists';
import TopSongs from '../TopSongs/TopSongs';
import { Login } from '../Login/Login';
import './App.scss';

export const App = () => (
  <div className="App">
    <header>
      <h1>Statify</h1>
      <Link to="/">Your Top Artists</Link>
      <Link to="/top40">Your Top 40</Link>
      <Link to="/login">Login</Link>
    </header>
    <main>
      <Route exact path="/" component={TopArtists} />
      <Route exact path="/top40" component={TopSongs} />
      <Route exact path="/top40/month" component={TopSongs} />
      <Route exact path="/top40/alltime" component={TopSongs} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
);
