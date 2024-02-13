import { useParams } from 'react-router-dom';
import {
  FilterBtn,
  BoardName,
  Wrap,
  customStyles,
} from './HeaderDashboard.styled';
import { Icon } from 'components/Icon';
import { useState } from 'react';
import Modal from 'react-modal';
import { FilterModal } from 'components/FilterModal/FilterModal';



export const HeaderDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { boardName } = useParams();
  return (
    <Wrap>
      <BoardName>{boardName}</BoardName>
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
