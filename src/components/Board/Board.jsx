import { Column } from 'components/Column';
import { IconWrap, AddBtn, Wrap } from './Board.styled';
import { Icon } from 'components/Icon';

export const Board = () => {
  return (
    <Wrap>
      <ul>
        <li>
          <Column />
        </li>
      </ul>
      <AddBtn type="button">
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another column
      </AddBtn>
    </Wrap>
  );
};
