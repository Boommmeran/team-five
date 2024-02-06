import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Container,
  Title,
} from 'components/EditProfile/EditProfile.styled';
import { sendDataEmail } from 'services/sendDataEmail';

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
    <Container>
      <Title>Need help</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={builderSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            type="email"
            name="emailForSupport"
            placeholder="Email address"
          />
          <ErrorMessage component="p" name="email" />
          <Field type="text" name="textMessage" placeholder="Comment" />
          <ErrorMessage component="p" name="comment" />
          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    </Container>
  );
};
