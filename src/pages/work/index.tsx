import React from 'react';

import './style.scss';

const Work = () => {
  return (
    <div>
      <div className='work'>
        <h1>My Work</h1>
      </div>
      <div className='work-details'>
        <h1 className='work-details__heading'>
          Working as Front End Developer
        </h1>
        <p className='work-details__lead'>
          Working as a front end developer is my favourite part of my tech
          stack, i love using TypeScript as part of it.
        </p>
        <div className='work-details__process'>
          <div className='work-details__process--left'>
            <h1>Money Budget Application</h1>
            <p>
              I created a money tracking app to help people fix their finances
              and meet their goals
            </p>
            <button>View Project</button>
            <h1>Creating design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              numquam quis itaque pariatur harum, libero ab perspiciatis
              accusantium aperiam eaque autem amet eum soluta reiciendis earum
              nostrum omnis odit natus?
            </p>
            <button>View Project</button>
          </div>
          <div className='work-details__process--right'></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
