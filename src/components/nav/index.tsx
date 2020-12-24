import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Nav = () => {
  return (
    <>
      <nav>
        <div className='navigation'>
          <h1>CodRis</h1>
          <ul>
            <li>
              <Link className='links' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='links' to='/work'>
                Work
              </Link>
            </li>
            <li>
              <Link className='links' to='/profile'>
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
