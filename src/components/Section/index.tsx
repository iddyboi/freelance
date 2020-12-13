import React, { useState } from 'react';
import Dropdown, { Contents } from '../../UI/Dropdown';
import './style.scss';

interface Skills {
  frontendOptions: Contents[];
  backEndOptions: Contents[];
}

const Section = () => {
  const [contents, setContents] = useState<Skills>({
    // frontend: ['HTML', 'CSS', 'Javascript', 'React', 'Angular'],
    // backend: ['Nodejs', 'Flask', 'PostgreSQL', 'MongoDB', 'Firebase'],
    frontendOptions: [
      {
        name: 'HTML',

        imgUrl: 'https://s.svgbox.net/files.svg?ic=html&fill=000',
      },
      {
        name: 'CSS',
        imgUrl: 'https://s.svgbox.net/files.svg?ic=css&fill=000',
      },
      {
        name: 'Javascript',
        imgUrl: 'https://s.svgbox.net/files.svg?ic=js-official',
      },
      {
        name: 'React',
        imgUrl: 'https://s.svgbox.net/files.svg?ic=reactjs',
      },
      {
        name: 'Angular',
        imgUrl: 'https://s.svgbox.net/files.svg?ic=angular',
      },
    ],
    backEndOptions: [
      { name: 'NodeJS', imgUrl: 'https://s.svgbox.net/files.svg?ic=node' },
      { name: 'Python', imgUrl: 'https://s.svgbox.net/files.svg?ic=python' },
      { name: 'PostGresQL', imgUrl: 'https://s.svgbox.net/files.svg?ic=plsql' },
      { name: 'MongoDB', imgUrl: 'https://s.svgbox.net/files.svg?ic=mongo' },
      {
        name: 'Firebase',
        imgUrl: 'https://s.svgbox.net/files.svg?ic=firebase',
      },
    ],
  });
  return (
    <section className='section'>
      <div className='section__content'>
        <h1 className='section__content--heading'>Skills</h1>
        <p className='section__content--lead'>
          Over the years i have acquired some skills from University and Work
          related. I also wish to learn more as time goes on!
        </p>

        <Dropdown contents={contents.frontendOptions} title='Front End' />
        <Dropdown contents={contents.backEndOptions} title='Back End' />
      </div>
    </section>
  );
};

export default Section;
