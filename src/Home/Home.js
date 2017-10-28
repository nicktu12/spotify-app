import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div className='home-div'>
    <div className='hero-banner'>
      <h1>Top Artists</h1>
    </div>
    <ul>
      <li>Top Artist 1</li>
      <li>Top Artist 2</li>
      <li>Top Artist 3</li>
      <li>Top Artist 4</li>
    </ul>
  </div>
);

export default connect(null, null)(Home);
