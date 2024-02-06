import { Icon } from 'components/Icon';
import * as Yup from 'yup';
import {
  FormWrap,
  Input,
  Text,
  AddBtn,
  IconWrap,
  ModalWrap,
  CloseBtn,
  ModalTitle,
} from './BoardCreatingModal.styled';
import { Formik } from 'formik';

const initialValues = {
    boardTitle: "",
};

const schema = Yup.object({
    boardTitle: Yup.string().required(),
});


export const BoardCreatingModal = ({ closeModal }) => {
    const onSubmit = values => {
        console.log(values);
        closeModal();
    };

  return (
    <ModalWrap>
      <ModalTitle>New board</ModalTitle>
      <CloseBtn type="button" onClick={closeModal}>
        <Icon name="close" />
      </CloseBtn>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
        <FormWrap>
          <Input type="text" placeholder="Title" name="boardTitle" />
          <Text>Icons</Text>
          <Text>Backgrounds</Text>
          <AddBtn type='submit'>
            <IconWrap>
              <Icon name="plus" />
            </IconWrap>{' '}
            Create
          </AddBtn>
        </FormWrap>
      </Formik>
    </ModalWrap>
  );
};
