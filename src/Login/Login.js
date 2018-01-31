import React from 'react';
import { spotifyClientId } from '../Utilities/apiKey';

export const Login = () => (
  <div className='login-div'>
    <h2>Welcome to Statify!</h2>
    <div>
      <p>
        To see your Spotify listening statistics<br/> 
        please sign in to Spotify below
      </p>
      <p>
        <a href={
          `http://localhost:4000/login`}
        > 
          <button>Login</button>
        </a>
      </p>
    </div>
  </div>
);
