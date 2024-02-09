import { Icon } from 'components/Icon';
import {
  AddBtn,
  CardList,
  HeadWrap,
  IconWrap,
  IconedBtn,
  Title,
  Wrap,
} from './Column.styled';

export const Column = () => {
  return (
    <>
      <HeadWrap>
        <Title>Column title</Title>
        <Wrap>
          <IconedBtn type="button">
            <Icon name="pencil" />
          </IconedBtn>
          <IconedBtn type="button">
            <Icon name="trash" />
          </IconedBtn>
        </Wrap>
      </HeadWrap>
      <CardList></CardList>
      <AddBtn type="button">
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another card
      </AddBtn>
    </>
  );
};
