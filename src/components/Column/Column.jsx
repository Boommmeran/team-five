import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import Card from 'components/Card/Card';
import {
  AddBtn,
  CardList,
  HeadWrap,
  IconWrap,
  IconedBtn,
  Title,
  Wrap,
} from './Column.styled';
import { EditColumnModal } from 'components/EditColumnModal/EditColumnModal';
import AddCardModal from 'components/AddCardModal/AddCardModal';

export const Column = () => {
  const [modalColumnIsOpen, setmodalColumnIsOpen] = useState(false);
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 0,
    },
  };

  const openColumnModal = () => {
    setmodalColumnIsOpen(true);
  };

  const closeColumnModal = () => {
    setmodalColumnIsOpen(false);
  };

  const openCardModal = () => {
    setmodalCardIsOpen(true);
  };

  const closeCardModal = () => {
    setmodalCardIsOpen(false);
  };

  return (
    <>
      <HeadWrap>
        <Title>Column title</Title>
        <Wrap>
          <IconedBtn type="button" onClick={openColumnModal}>
            <Icon name="pencil" />
          </IconedBtn>
          <IconedBtn type="button">
            <Icon name="trash" />
          </IconedBtn>
        </Wrap>
      </HeadWrap>
      <CardList>
        <Card />
        <Card />
      </CardList>
      <AddBtn type="button" onClick={openCardModal}>
        <IconWrap>
          <Icon name="plus" />
        </IconWrap>{' '}
        Add another card
      </AddBtn>
      <Modal
        isOpen={modalCardIsOpen}
        onRequestClose={closeCardModal}
        style={customStyles}
        contentLabel="Card Add Modal"
        ariaHideApp={false}
      >
        <AddCardModal
          title={'Add another card'}
          btnText={'Add'}
          onClose={closeCardModal}
          reqFunc={values => console.log(values)}
        />
      </Modal>
      <Modal
        isOpen={modalColumnIsOpen}
        onRequestClose={closeColumnModal}
        style={customStyles}
        contentLabel="Column Edit Modal"
        ariaHideApp={false}
      >
        <EditColumnModal
          title={'Edit column'}
          onClose={closeColumnModal}
          reqFunc={value => console.log(value)}
        />
      </Modal>
    </>
  );
};
