import React, { FC, useState } from 'react';
import 'external-svg-loader';
import './style.scss';

export interface Contents {
  name: string;
  imgUrl: string;
}

interface IProps {
  title: string;
  contents: Contents[];
}
const Dropdown: FC<IProps> = ({ title, contents }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className='dropdown' onClick={onToggle}>
      <div className='dropdown__title'>
        <h1 className='dropdown__title--heading'>{title}</h1>

        {!toggle ? (
          <svg
            data-src='https://s.svgbox.net/materialui.svg?ic=arrow_drop_down'
            width='32'
            height='32'
            fill='currentColor'
          ></svg>
        ) : (
          <svg
            data-src='https://s.svgbox.net/materialui.svg?ic=arrow_drop_up'
            width='32'
            height='32'
            fill='currentColor'
          ></svg>
        )}
      </div>
      <div className={`${toggle ? '' : 'hide'} dropdown__content `}>
        {contents.map((content, indx) => (
          <div key={indx} className='dropdown__content--flex'>
            <p>{content.name}</p>
            <img src={content.imgUrl} alt='' width='32' height='32' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
