import Icons from '../sprite.svg';

export const Icon = ({
  fill = 'none',
  stroke = 'inherit',
  name,
  width = '18px',
  height = '18px',
}) => {
  return (
    <svg fill={fill} stroke={stroke} width={width} height={height}>
      <use href={`${Icons}#icon-${name}`}></use>
    </svg>
  );
};
