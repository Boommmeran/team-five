import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'components/Icon';
import {
  Button,
  Label,
  StyledField,
  StyledForm,
  ButtonText,
} from './EditColumnModal.styled';

const columnFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('This field is required!'),
});

export const EditColumnModal = ({ onClose, title, reqFunc }) => {
  // тут має бути логіка отримання значення назви вже існуючого
  // стовпця і подальший запис в initValues
  const initialValues = {
    name: '',
  };

  const onSubmit = values => {
    reqFunc(values);
    onClose();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={columnFormSchema}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <Label>{title}</Label>
          <StyledField type="text" name="name" placeholder="Title" />
          {/* <ErrMsg name="name" component="div"/> */}

          <Button type="submit">
            <div style={{ stroke: 'var(--plusInBtn)' }}>
              <Icon name="icon-plus" width="20" height="20" />
            </div>
            <ButtonText>Add</ButtonText>
          </Button>
        </StyledForm>
      </Formik>
      <Icon name="icon-close" width="20" height="20" onClick={onClose} />
    </>
  );
};
