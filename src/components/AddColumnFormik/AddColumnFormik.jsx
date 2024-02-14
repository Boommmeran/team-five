import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'components/Icon';
import {
  Button,
  ButtonText,
  CloseBtn,
  Container,
  Label,
  StylePlus,
  StyledField,
  StyledForm,
} from './AddColumnFormik.styled.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columns/columnsOperations.js';

const addColumnFormSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too short!').required('This field is required!'),
});

export const AddColumnFormik = ({ boardId, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = body => {
    dispatch(addColumn({ body, boardId }));
  };

  return (
    <Container>
      <Label>Add column</Label>
      <CloseBtn
        type="button"
        onClick={onClose}
        // style={{ stroke: 'var(--primaryTextColor)' }}
      >
        <Icon name="close" width="18" height="18" stroke="var(--textColorcalendar)"/>
      </CloseBtn>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={addColumnFormSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField type="text" name="title" placeholder="Title" />
          <Button type="submit">
            <StylePlus>
              <Icon name="plus" width="14" height="14" />
            </StylePlus>
            <ButtonText>Add</ButtonText>
          </Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};
