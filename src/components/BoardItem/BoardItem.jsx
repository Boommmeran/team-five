import { useState } from 'react';
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import { BoardItemContainer, ControlIconsContainer } from './BoardItem.styled';
import { BoardCreatingModal } from 'components/BoardCreatingModal';
import { useDispatch } from 'react-redux';
import { deleteBoard, fetchBoardById } from '../../redux/boards/boardsOperations';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from '../../redux/boards/boardsSelectors';

const customStyles = {
  content: {
    width: 'fit-content',
    height: 'fit-content',
    padding: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

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
      dispatch(fetchBoardById(BoardId))
    }
  };

  const handleDelete = (BoardId) => {
    dispatch(deleteBoard(BoardId));
  }

console.log(currentBoard)

  return (
    <BoardItemContainer
      onClick={(event) => handleSelectBoard(event, board._id)}
      selected={currentBoard && currentBoard._id === board._id}
    >
      <Icon name={board.icon} width="18" height="18" style={{ opacity: 0.5 }} />
      <p>{board.title}</p>
      <ControlIconsContainer>
        <button type="button" onClick={openModal}>
          <Icon name="pencil" width="16" height="16" />
        </button>
        <button type="button" onClick={() => handleDelete(board._id)}>
          <Icon name="trash" width="16" height="16" />
        </button>
      </ControlIconsContainer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edition board modal"
      >
        <BoardCreatingModal
          onClose={closeModal}
          title="Edit board"
          btnText="Edit"
        />
      </Modal>
    </BoardItemContainer>
  );
};
