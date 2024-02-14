import { useState } from 'react';
import Modal from 'react-modal';
import { Icon } from 'components/Icon';
import { FilterModal } from 'components/FilterModal';
import {
  FilterBtn,
  BoardTitle,
  Wrap,
  customStyles,
} from './HeaderDashboard.styled';

export const HeaderDashboard = ({ boardTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrap>
      {boardTitle && <BoardTitle>{boardTitle}</BoardTitle>}
      <FilterBtn type="button" onClick={openModal}>
        <Icon name="filter" />
        Filters{' '}
      </FilterBtn>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Filters Modal"
      >
        <FilterModal closeModal={closeModal} />
      </Modal>
    </Wrap>
  );
};
