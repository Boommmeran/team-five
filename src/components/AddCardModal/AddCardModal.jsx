import React from 'react';
import Modal from 'react-modal';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Calendar } from 'components/Сalendar';
import { Icon } from 'components/Icon';
import {
  ModalBody,
  Container,
  TitleModal,
  StyledDescription,
  CloseModal,
  TitleCard,
  LabelColorStyle,
  StyleRadioButton,
  DeadlineStyle,
  AddButton,
  StylePlus,
  AddCardButton,
  RadioButton,
  RadioButtonBlue,
} from './AddCardModal.styled.jsx';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 4px 16px 0px #1616160D',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  },
};

const FormCardSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
});

Modal.setAppElement('#root');

export function AddCardModal({ onAdd }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <AddCardButton onClick={openModal}>
        <StylePlus>
          <Icon name="plus" width="14" height="14" />
        </StylePlus>
        <p> Add another card</p>
      </AddCardButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container>
          <ModalBody>
            <TitleModal>Add card</TitleModal>
            <CloseModal>
              <button type="button" onClick={closeModal}>
                <div style={{ stroke: 'var(--primaryTextColor)' }}>
                  <Icon name="close" width="18" height="18" />
                </div>
              </button>
            </CloseModal>
            <Formik
              initialValues={{
                title: '',
                description: '',
                colorPicker: '',
                dealline: '',
              }}
              validationSchema={FormCardSchema}
              onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
              }}
            >
              <>
                <label></label>
                <TitleCard type="text" name="title" placeholder="Title" />
                <label></label>
                <StyledDescription
                  type="textarea"
                  name="description"
                  placeholder="Description"
                />
                <LabelColorStyle id="colorCard-radio-group">
                  Label color
                </LabelColorStyle>
                <StyleRadioButton role="group" aria-labelledby="my-radio-group">
                  <RadioButtonBlue>
                    <RadioButton type="radio" name="colorPicker" value="Blue" />
                  </RadioButtonBlue>
                  <label>
                    <Field type="radio" name="colorPicker" value="Red" />
                  </label>
                  <label>
                    <Field type="radio" name="colorPicker" value="Green" />
                  </label>
                  <label>
                    <Field type="radio" name="colorPicker" value="Grey" />
                  </label>
                  {/* <div>Picked: {values.picked}</div> */}
                </StyleRadioButton>
                <DeadlineStyle>Deadline</DeadlineStyle>
                <Calendar />
                <AddButton type="submit">
                  <StylePlus>
                    <Icon name="plus" width="14" height="14" />
                  </StylePlus>
                  <p> Add</p>
                </AddButton>
              </>
            </Formik>
          </ModalBody>
        </Container>
      </Modal>
    </>
  );
}
