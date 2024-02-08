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
  StyledLabel,
  Label,
} from './EditProfile.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from 'hooks';
import { update } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';

import { Icon } from 'components/Icon';

const EditProfileSchema = Yup.object().shape({
  photo: Yup.string().url('invalid url'),
  name: Yup.string()
    .min(2, '2 chars minimum')
    .max(32, '32 chars maximum')
    .matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/, 'Invalin name ')
    .required('this field is required'),
  email: Yup.string().email('Invalid email').required('this field is required'),
  password: Yup.string()
    .min(8, '8 chars minimum')
    .max(64, '64 chars maximum')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,
      'only latin letters, numbers and symbols'
    )
    .matches(/^\S*$/, 'password must not contain spaces')
    .required('this field is required '),
});

export const EditProfile = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  
  return (
    <Container>
      <Title>Edit profile</Title>
      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          password: '',
        }}
        validationSchema={EditProfileSchema}
        onSubmit={(values, actions) => {
          dispatch(update(values));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <AvatarField id="photo" name="photo" type="file" accept="image/*" />

          <Label>
          
            <StyledField id="name" name="name" />
            <ErrMsg name="name" component="p" />
          </Label>

          <Label>
            <StyledField
              id="email"
              name="email"
              type="email"
            />
            <ErrMsg name="email" component="p" />
          </Label>

          <StyledLabel>
            <Icon name="eye" stroke="var(--primaryTextColor)" />
            <LastField id="password" name="password" placeholder="Enter or update your password"/>
            <ErrMsg name="password" component="p" />
          </StyledLabel>

          <Button type="submit">Submit</Button>
        </StyledForm>
      </Formik>
      <ButtonAvatar>
        <Icon
          name="plus"
          width="10px"
          height="10px"
          stroke="var(--primaryTextColor)"
        />
      </ButtonAvatar>
    </Container>
  );
};
