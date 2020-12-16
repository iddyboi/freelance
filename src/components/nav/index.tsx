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
              <a className='links' href='#'>
                <Link className='links' to='/'>
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a className='links' href='#'>
                <Link className='links' to='/work'>
                  Work
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
