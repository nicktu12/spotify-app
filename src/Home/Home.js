import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Hey yall</h1>
    <p>Dis da homepage</p>
  </div>
);

export default connect(null, null)(Home);
