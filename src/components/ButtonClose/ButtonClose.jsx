import { ButtonCloseStyled } from './ButtonClose.styled';

const { Icon } = require('components/Icon');

export const ButtonClose = () => {
  return (
    <ButtonCloseStyled type="button">
      <Icon
        stroke="var(--primaryTextColor)"
        name="close"
        width="18"
        height="18"
      />
    </ButtonCloseStyled>
  );
};
