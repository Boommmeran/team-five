import { Icon } from 'components/Icon';
import { ButtonCloseStyled } from './ButtonClose.styled';

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
