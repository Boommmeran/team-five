import {
  Container,
  Title,
  Button,
  StyledForm,
  StyledField,
  LastField,
  AvatarField,
  ButtonAvatar,
  ErrMsg,
} from './EditProfile.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EditProfileSchema = Yup.object().shape({
  photo: Yup.string().url('invalid url'),
  name: Yup.string()
    .min(2, '2 chars minimum')
    .max(32, '32 chars maximum')
    .matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/, 'Invalin name ')
    .required('this field is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+@[a-zA-Z0-9]+\.[a-zA-Z]{2, }$/,
      'Invalid email'
    )
    .required('this field is required'),
  password: Yup.string()
    .min(8, '8 chars minimum')
    .max(64, '64 chars maximum')
    .noWhitespace('Password must not contain spaces')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,
      'only latin letters, numbers and symbols'
    )
    .required('this field is required required'),
});

export const EditProfile = () => {
  return (
    <Container>
      <Title>Edit profile</Title>
      <Formik
        initialValues={{
          photo: '',
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={EditProfileSchema}
        onSubmit={(values, actions) => {
          console.log('Profile form', values); //посилання на функцію,яка буде викликана при сабміті форми
          actions.resetForm();
        }}
      >
        <StyledForm>
          <AvatarField id="photo" name="photo" type="file" accept="image/*" />

          <ErrMsg name="name" component={'div'} />
          <StyledField id="name" name="name" placeholder="Enter your name" />
          <ErrMsg name="email" component={'div'} />
          <StyledField
            id="email"
            name="email"
            placeholder="ivetta34@gmail.com"
            type="email"
          />

          <ErrMsg name="password" component={'div'} />
          <LastField
            id="password"
            name="password"
            placeholder="ivetta1999.23"
          />

          <Button type="submit">Submit</Button>
        </StyledForm>
      </Formik>
      <ButtonAvatar>+</ButtonAvatar>
    </Container>
  );
};
