import { Column } from 'components/Column';
import {
  customStyles,
  IconWrap,
  AddBtn,
  Wrap,
  ColumnItem,
  Container,
  ColumnList,
} from './Board.styled';
import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';

export const Board = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Container>
        <Wrap>
          <ColumnList>
            <ColumnItem>
              <Column title={'New'} />
            </ColumnItem>
          </ColumnList>
          <AddBtn type="button" onClick={openModal}>
            <IconWrap>
              <Icon name="plus" />
            </IconWrap>{' '}
            Add another column
          </AddBtn>
        </Wrap>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Column Edit Modal"
        ariaHideApp={false}
      >
        {/* <EditColumnModal
          title={'Add column'}
          onClose={closeModal}
          reqFunc={value => console.log(value)}
        /> */}
      </Modal>
    </>
  );
};
