import { useDispatch } from 'react-redux';
import { MoveCardItemButtonStyled } from './MoveCardItem.styled';
import { chengeColumnsCard } from '../../redux/cards/cardsOperations';

export const MoveCardItem = ({ column, cardId }) => {
  const dispatch = useDispatch();
  const { _id, title } = column;
  const handleMoveCard = () => {
    dispatch(chengeColumnsCard({ cardId, toColumnId: _id }));
  };
  return (
    <li>
      <MoveCardItemButtonStyled onClick={handleMoveCard}>
        {title}
      </MoveCardItemButtonStyled>
    </li>
  );
};
