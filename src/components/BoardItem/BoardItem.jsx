import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import {
  deleteBoard,
  fetchBoardById,
} from '../../redux/boards/boardsOperations';
import { selectCurrentBoard } from '../../redux/boards/boardsSelectors';
import { BoardCreatingModal } from 'components/BoardCreatingModal';
import { Icon } from 'components/Icon';
import {
  BoardItemContainer,
  ControlIconsContainer,
  customStylesForModal,
} from './BoardItem.styled';

export const BoardItem = ({ board }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectBoard = (event, BoardId) => {
    if (!event.target.closest('button')) {
      dispatch(fetchBoardById(BoardId));
    }
  };

  const handleDelete = BoardId => {
    dispatch(deleteBoard(BoardId));
  };

  return (
    <BoardItemContainer
      onClick={event => handleSelectBoard(event, board._id)}
      selected={currentBoard && currentBoard._id === board._id}
    >
      <Icon name={board.icon} width="18" height="18" style={{ opacity: 0.5 }} />
      <p>{board.title}</p>
      <ControlIconsContainer>
        <button type="button" style={{ cursor: 'pointer' }} onClick={openModal}>
          <Icon name="pencil" width="16" height="16" />
        </button>
        <button
          type="button"
          style={{ cursor: 'pointer' }}
          onClick={() => handleDelete(board._id)}
        >
          <Icon name="trash" width="16" height="16" />
        </button>
      </ControlIconsContainer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStylesForModal}
        contentLabel="Edition board modal"
      >
        <BoardCreatingModal
          onClose={closeModal}
          title="Edit board"
          btnText="Edit"
          board={board}
        />
      </Modal>
    </BoardItemContainer>
  );
};
