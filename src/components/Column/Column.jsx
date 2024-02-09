import { Icon } from 'components/Icon';
import { AddBtn, IconWrap, Title } from './Column.styled';

export const Column = () => {
  return (
    <>
      <div>
        <Title>Column title</Title>
            <button type="button">
              <Icon />
            </button>
            <button type="button">
              <Icon />
            </button>
      </div>
      <ul></ul>
      <AddBtn type="button">
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another card
      </AddBtn>
    </>
  );
};
