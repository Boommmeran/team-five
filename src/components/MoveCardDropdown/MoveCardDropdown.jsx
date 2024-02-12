import { useSelector } from 'react-redux';
import { MoveList } from './MoveCardDropdown.styled';
import { MoveCardItem } from 'components/MoveCardItem/MoveCardItem';
import { nanoid } from '@reduxjs/toolkit';

export const MoveCardDropdown = ({ currColumnId, cardId }) => {
  const { columns } = useSelector(state => state.columns);
  const filteredColumns = columns?.filter(({ _id }) => _id !== currColumnId);

  return (
    <MoveList>
      {filteredColumns.map(item => (
        <MoveCardItem key={nanoid()} column={item} cardId={cardId} />
      ))}
    </MoveList>
  );
};
