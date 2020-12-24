import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button';
import axios from 'axios';
import './style.scss';

const Main = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api');
      const data = (await response).data;
      setName(data.name);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className='main'>
      <div className='hero'>
        <div className='hero__heading'>
          <h1>Hi, I'm {name || 'Idr'}</h1>

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
