import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendDataEmail } from 'services/sendDataEmail';
// import { ButtonClose } from 'components/ButtonClose/ButtonClose';
import {
  ButtonForModal,
  ContainerForModal,
  ErrMsg,
  Label,
  StyledFieldInModal,
  StyledFormInModal,
  TitleForModal,
} from './SendEmail.styled';
import { Icon } from 'components/Icon';
import { ButtonCloseStyled } from './ButtonClose.styled';

const initialValues = {
  emailForSupport: '',
  textMessage: '',
};

const builderSchema = Yup.object().shape({
  emailForSupport: Yup.string().email().required('This field is required'),
  textMessage: Yup.string()
    .min(10, `It's can be up to 10 characters long`)
    .required(`This field is required.`),
});

export const SendEmail = () => {
  const onSubmit = (data, form) => {
    sendDataEmail(data);
    form.resetForm();
  };

  return (
    <ContainerForModal>
      <TitleForModal>Need help</TitleForModal>
      {/* <ButtonClose/> */}
      <ButtonCloseStyled type="button">
        <Icon
          stroke="var(--primaryTextColor)"
          name="close"
          width="18"
          height="18"
        />
      </ButtonCloseStyled>{' '}
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
            <StyledFieldInModal
              rows={4}
              as="textarea"
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
