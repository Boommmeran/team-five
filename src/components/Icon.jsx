import Icons from '../sprite.svg';

export const Icon = ({ name, width = '18px', height = '18px' }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${Icons}#icon-${name}`}></use>
    </svg>
  );
};  