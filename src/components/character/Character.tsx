import React, {FC} from 'react';
import './Character.css';

interface IProps {
  name: string;
  status: string;
  type: string;
  gender: string;
  img: string;

  children?: React.ReactNode;
}

const Character:FC<IProps> = ({name, status, type, gender, img, children}) => {
  return (
    <div>
      <h2 className={'title'}>{name}</h2>
      <ul>
        <li>status: {status}</li>
        <li>type: {type}</li>
        <li>gender: {gender}</li>
      </ul>
      <img src={img} alt={name}/>
      {
        children
      }
    </div>
  );
};

export default Character;