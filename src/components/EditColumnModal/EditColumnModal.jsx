import Modal from 'react-modal';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'components/Icon';
import {
  Button,
  ButtonText,
  CloseBtn,
  Label,
  StylePlus,
  StyledField,
  StyledForm,
  customModalStyles,
} from './EditColumnModal.styled';

const addColumnFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('This field is required!'),
});

Modal.setAppElement('#root');

export const EditColumnModal = ({ onAdd }) => {
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
        Open modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Example Modal"
      >
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={addColumnFormSchema}
          onSubmit={(values, action) => {
            onAdd(values);
            action.resetForm();
          }}
        >
          <StyledForm>
            <Label>Edit column</Label>
            <CloseBtn
              type="button"
              onClick={closeModal}
              style={{ stroke: 'var(--primaryTextColor)' }}
            >
              <Icon name="close" width="18" height="18" />
            </CloseBtn>
            <StyledField type="text" name="name" placeholder="Title" />
            {/* <ErrMsg name="name" component="div"/> */}

            <Button type="submit">
              <StylePlus>
                <Icon name="plus" width="14" height="14" />
              </StylePlus>
              <ButtonText>Add</ButtonText>
            </Button>
          </StyledForm>
        </Formik>
      </Modal>
    </>
  );
};
