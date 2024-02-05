import { IconWrap, AddBtn } from './Board.styled';
import { Icon } from 'components/Icon';

export const Board = () => {
  return (
    <div>
      <AddBtn type="button">
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another column
      </AddBtn>
    </div>
  );
};
