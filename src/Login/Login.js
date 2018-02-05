import React from 'react';

export const Login = () => (
  <div className='login-div'>
    <h2>Welcome to Statify!</h2>
    <div>
      <p>
        To see your Spotify listening statistics<br/> 
        please sign in to Spotify below
      </p>
      <p>
        <a href={`https://statify-be.herokuapp.com/login`}> 
          <button>Login</button>
        </a>
      </p>
      <p>
        <a href={`https://www.github.com/nicktu12/statify`} class='about-link'> 
          About
        </a>
      </p>
    </div>
  </div>
);
