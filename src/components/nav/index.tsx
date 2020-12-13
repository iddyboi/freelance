import React from 'react';
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
                Home
              </a>
            </li>
            <li>
              <a className='links' href='#'>
                Work
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
