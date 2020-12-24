import React, { FC } from 'react';
import './style.scss';

interface IProps {
  text: string;
  clickFunction?: () => {};
}
const Button: FC<IProps> = ({ text, clickFunction }) => {
  return (
    <button className='btn' onClick={clickFunction}>
      {text}
    </button>
  );
};

export default Button;
