import Modal from 'react-modal';
import { useState } from 'react';
import { customStyles } from './Modal.styled';
import {
  FiltersTytle,
  Picker,
  PickersList,
  PickerName,
  ShowPickers,
} from './Filters.styled';
import { Icon } from 'components/Icon';

Modal.setAppElement('#root');

const Filters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Open filters
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FiltersTytle>Filters</FiltersTytle>
        <PickerName>
          Label color
          <ShowPickers>Show all</ShowPickers>
        </PickerName>
        <PickersList>
          <Picker>
            <input
              type="radio"
              name="colorPicker"
              value="Grey"
              defaultChecked={true}
            />
            Without priority
          </Picker>
          <Picker>
            <input type="radio" name="colorPicker" value="Blue" />
            Low
          </Picker>
          <Picker>
            <input type="radio" name="colorPicker" value="Red" />
            Medium
          </Picker>
          <Picker>
            <input type="radio" name="colorPicker" value="Green" />
            High
          </Picker>
        </PickersList>
        <Icon name="icon-close" width="20" height="20" onClick={closeModal} />
      </Modal>
    </>
  );
};

export default Filters;
