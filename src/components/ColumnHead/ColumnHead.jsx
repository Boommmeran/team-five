import { Icon } from 'components/Icon';
import { HeadWrap, IconedBtn, Title, Wrap } from './ColumnHead.styled';

export const ColumnHead = ({ title, openModal, columnId }) => {
  return (
    <HeadWrap>
      <Title>{title}</Title>
      <Wrap>
        <IconedBtn type="button" onClick={openModal}>
          <Icon name="pencil" />
        </IconedBtn>
        <IconedBtn type="button">
          <Icon name="trash" />
        </IconedBtn>
      </Wrap>
    </HeadWrap>
  );
};
