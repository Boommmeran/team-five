import { StartText, BoardCreationBtn } from './MainDashboard.styled';
import { useParams } from 'react-router-dom';
import { Board } from 'components/Board';
import { customStyles } from './MainDashboard.styled';
import Modal from 'react-modal';
import { useState } from 'react';
import { BoardCreatingModal } from 'components/BoardCreatingModal';

export const MainDashboard = () => {
  const { boardName } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {boardName ? (
        <Board />
      ) : (
        <StartText>
          Before starting your project, it is essential{' '}
          <BoardCreationBtn type="button" onClick={openModal}>
            to create a board
          </BoardCreationBtn>{' '}
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </StartText>
      )}
      <Board />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Board Creation Modal"
        ariaHideApp={false}
      >
        <BoardCreatingModal
          onClose={closeModal}
        />
      </Modal>
    </>
  );
};
