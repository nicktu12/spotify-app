import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import AnotherComp from './AnotherComp/AnotherComp';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/another-page">Somewhere ...</Link>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/another-page" component={AnotherComp} />
    </main>
  </div>
);

export default App;
