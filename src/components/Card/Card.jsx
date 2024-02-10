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
} from './Card.styled';

export default function Card() {
  const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 4px 16px 0px #1616160D',
      padding: 0,
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
      <CardColor></CardColor>
      <CardTitle>Quiz Creation</CardTitle>
      <CardDescription>
        Create engaging and interactive quizzes using Kahoot's intuitive quiz
        builder. Design questions, provide multiple-choice answers, and include
        multimedia elements such as images and videos.
      </CardDescription>
      <CardSolid></CardSolid>
      <CardDetals>
        <CardInformation>
          <Priority>
            <PriorityTitle>Priority</PriorityTitle>
            <PriorityDetals>
              <PriorityColor></PriorityColor>
              <PriorityTipe>Without</PriorityTipe>
            </PriorityDetals>
          </Priority>
          <Deadline>
            <DeadlineTitle>Deadline</DeadlineTitle>
            <DeadlineDate>14/02/2024</DeadlineDate>
          </Deadline>
        </CardInformation>
        <CardButtons>
          <Bell type="button">
            <Icon name="bell" width="16" height="16" />
          </Bell>
          <button type="button">
            <Icon name="arrow-in-circle" width="16" height="16" />
          </button>
          <button type="button" onClick={openCardModal}>
            <Icon name="pencil" width="16" height="16" />
          </button>
          <button type="button">
            <Icon name="trash" width="16" height="16" />
          </button>
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
