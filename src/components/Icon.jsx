import Icons from '../sprite.svg';

export const Icon = ({ name, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${Icons}#icon-${name}`}></use>
    </svg>
  );
};  