import { useState } from 'react';
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import { BoardItemContainer, ControlIconsContainer } from './BoardItem.styled';
import { BoardEditModal } from 'components/BoardEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard } from '../../redux/boards/boardsOperations';
import { selectBoards, selectCurrentBoard } from '../../redux/boards/boardsSelectors';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();
  const boards = useSelector(selectBoards);
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectBoard = (event, boardId) => {
    if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
      return;
    }

    navigate(`/${boardId}`);
    localStorage.setItem('lastBoard', boardId);
  };

  const handleDelete = boardId => {
    dispatch(deleteBoard(boardId));
    const filteredBoards = boards.filter(board => board._id !== boardId);
    localStorage.removeItem('lastBoard');

    if (filteredBoards.length === 0) {
      navigate(`/`);
      return;
    }

    const lastBoardObj = filteredBoards[filteredBoards.length - 1];

    navigate(`/${lastBoardObj._id}`);
  };


  return (
    <BoardItemContainer
      onClick={event => handleSelectBoard(event, board._id)}
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
        <BoardEditModal onClose={closeModal} board={board} />
      </Modal>
    </BoardItemContainer>
  );
};
