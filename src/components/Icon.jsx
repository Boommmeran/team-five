import Icons from '../sprite.svg';

export const Icon = ({ name }) => {
  return (
    <svg>
      <use href={`${Icons}#icon-${name}`}></use>
    </svg>
  );
};  