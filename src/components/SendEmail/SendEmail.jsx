import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendDataEmail } from 'services/sendDataEmail';
import {
  ButtonClose,
  ButtonForModal,
  ContainerForModal,
  ErrMsg,
  Label,
  StyledFieldInModal,
  StyledFormInModal,
  StyledTextareaInModal,
  TitleForModal,
} from './SendEmail.styled';
import { Icon } from 'components/Icon';

const initialValues = {
  emailForSupport: '',
  textMessage: '',
};

const builderSchema = Yup.object().shape({
  emailForSupport: Yup.string().email().required('This field is required'),
  textMessage: Yup.string()
    .min(5, `It's can be up to 5 characters long`)
    .required(`This field is required`),
});

export const SendEmail = ({ onClose }) => {
  const onSubmit = (data, form) => {
    sendDataEmail(data);
    form.resetForm();
    onClose();
  };

  return (
    <ContainerForModal>
      <TitleForModal>Need help</TitleForModal>
      <ButtonClose type="button" onClick={onClose}>
        <Icon
          stroke="var(--primaryTextColor)"
          name="close"
          width="18"
          height="18"
        />
      </ButtonClose>
      <Formik
        initialValues={initialValues}
        validationSchema={builderSchema}
        onSubmit={onSubmit}
      >
        <StyledFormInModal>
          <Label>
            <StyledFieldInModal
              type="email"
              name="emailForSupport"
              placeholder="Email address"
            />
            <ErrMsg component="p" name="emailForSupport" />
          </Label>

          <Label>
            <StyledTextareaInModal
              rows={4}
              component="textarea"
              type="text"
              name="textMessage"
              placeholder="Comment"
            />
            <ErrMsg component="p" name="textMessage" />
          </Label>

          <ButtonForModal type="submit">Send</ButtonForModal>
        </StyledFormInModal>
      </Formik>
    </ContainerForModal>
  );
};
