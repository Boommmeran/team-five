import { Icon } from 'components/Icon';
import Modal from 'react-modal';
import { useState } from 'react';
import AddCardModal from 'components/AddCardModal/AddCardModal';

import {
  CardBody,
  CardDetals,
  Priority,
  PriorityDetals,
  CardColor,
  CardTitle,
  CardDescription,
  CardSolid,
  PriorityTitle,
  PriorityTipe,
  PriorityColor,
  Deadline,
  DeadlineTitle,
  DeadlineDate,
  CardButtons,
  CardInformation,
  Bell,
  Button,
} from './Card.styled';

export default function Card({ card }) {
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);

  const { title, text, deadline, priority } = card;
  const dateDeadline = new Date(deadline);
  const formatedDate = `${dateDeadline.getDay()}/${dateDeadline.getMonth()}/${dateDeadline.getFullYear()}`;
  const cardTextDescription = text.substring(0, 90) + '...';

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      boxShadow: '0px 4px 16px 0px #1616160D',
    },
    overlay: {
      background: 'rgba(0,0,0,0.5)',
    },
  };

  const openCardModal = () => {
    setmodalCardIsOpen(true);
  };

  const closeCardModal = () => {
    setmodalCardIsOpen(false);
  };

  return (
    <CardBody>
      <CardColor priority={priority}></CardColor>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{cardTextDescription}</CardDescription>
      <CardSolid></CardSolid>
      <CardDetals>
        <CardInformation>
          <Priority>
            <PriorityTitle>Priority</PriorityTitle>
            <PriorityDetals>
              <PriorityColor priority={priority}></PriorityColor>
              <PriorityTipe>{priority}</PriorityTipe>
            </PriorityDetals>
          </Priority>
          <Deadline>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineDate>{formatedDate}</DeadlineDate>
          </Deadline>
        </CardInformation>
        <CardButtons>
          <Bell type="button">
            <Icon name="bell" width="16" height="16" />
          </Bell>
          <Button type="button">
            <Icon name="arrow-in-circle" width="16" height="16" />
          </Button>
          <Button type="button" onClick={openCardModal}>
            <Icon name="pencil" width="16" height="16" />
          </Button>
          <Button type="button">
            <Icon name="trash" width="16" height="16" />
          </Button>
        </CardButtons>
      </CardDetals>
      <Modal
        isOpen={modalCardIsOpen}
        onRequestClose={closeCardModal}
        style={customStyles}
        contentLabel="Card Add Modal"
        ariaHideApp={false}
      >
        <AddCardModal
          title={'Edit card'}
          btnText={'Edit'}
          onClose={closeCardModal}
          reqFunc={values => console.log(values)}
        />
      </Modal>
    </CardBody>
  );
}
