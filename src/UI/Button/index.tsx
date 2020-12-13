import React, { FC } from 'react';
import './style.scss';

interface IProps {
  text: string;
}
const Button: FC<IProps> = ({ text }) => {
  return <button className='btn'>{text}</button>;
};

export default Button;
