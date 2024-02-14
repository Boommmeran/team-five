import { useDispatch } from 'react-redux';
import {
  MoveCardItemButtonStyled,
  MoveCardItemStyled,
} from './MoveCardItem.styled';
import { chengeColumnsCard } from '../../redux/cards/cardsOperations';
import { Icon } from 'components/Icon';

export const MoveCardItem = ({ column, cardId, currentId }) => {
  const dispatch = useDispatch();
  const { _id, title } = column;
  const current = _id === currentId ? 'current' : '';

  const handleMoveCard = () => {
    dispatch(chengeColumnsCard({ cardId, toColumnId: _id }));
  };
  return (
    <MoveCardItemStyled className={current}>
      <MoveCardItemButtonStyled onClick={handleMoveCard}>
        {title}
      </MoveCardItemButtonStyled>
      <Icon
        name="arrow-in-circle"
        width="16px"
        height="16px"
        stroke="var(--secondaryTextColor)"
      />
    </MoveCardItemStyled>
  );
};
