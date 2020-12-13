import React from 'react';
import Button from '../../UI/Button';
import './style.scss';

const Main = () => {
  return (
    <div className='main'>
      <div className='hero'>
        <div className='hero__heading'>
          <h1>Hi, I'm Idris</h1>
          <h2>a Full Stack Developer from London 😬 </h2>
          <p>
            I create responsive web applications to help improve user experience
            and interaction on your websites.
          </p>
          <Button text='About Me' />
        </div>
      </div>
    </div>
  );
};

export default Main;
