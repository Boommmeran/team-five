import { useSelector } from 'react-redux';
import { MoveList } from './MoveCardDropdown.styled';
import { MoveCardItem } from 'components/MoveCardItem/MoveCardItem';
import { nanoid } from '@reduxjs/toolkit';

export const MoveCardDropdown = ({ currColumnId, cardId }) => {
  const { columns } = useSelector(state => state.columns);
  

  return (
    <MoveList>
      {columns.map(item => {
        return (
          <MoveCardItem
            currentId={currColumnId}
            key={nanoid()}
            column={item}
            cardId={cardId}
          />
        );
      })}
    </MoveList>
  );
};
