import React from 'react';
import './NewLetter.css';

const NewLetter = () => {
  return (
    <div className='newletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className='newletter-input'>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewLetter;
