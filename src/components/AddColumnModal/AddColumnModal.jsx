import Modal from 'react-modal';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Label, StyledField, StyledForm } from './Modal.styled';
import { customStyles } from './Modal.styled';
import { theme } from '../../index.js';
import { Icon } from 'components/Icon';
import { ButtonText } from './AddColumnModal.styled';

const addColumnFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('This field is required!'),
});

Modal.setAppElement('#root');

const AddColumn = ({ onAdd }) => {
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
        style={customStyles}
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
            <Label>Add column</Label>
            <StyledField type="text" name="name" placeholder="Title" />
            {/* <ErrMsg name="name" component="div"/> */}

            <Button type="submit">
              <div style={{ stroke: theme.colors.whiteColor }}>
                <Icon name="icon-plus" width="20" height="20" />
              </div>
              <ButtonText>Add</ButtonText>
            </Button>
          </StyledForm>
        </Formik>
        <Icon name="icon-close" width="20" height="20" onClick={closeModal} />
      </Modal>
    </>
  );
};

export default AddColumn;
