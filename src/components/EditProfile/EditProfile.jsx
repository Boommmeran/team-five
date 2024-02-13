import {
  Container,
  Title,
  Button,
  StyledForm,
  StyledField,
  LastField,
  ErrMsg,
  StyledLabel,
  Label,
} from './EditProfile.styled';
import { Formik } from 'formik';

import { useAuth } from 'hooks';
import { update } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { UpdateAvatar } from 'components/UpdateAvatar';
import { Icon } from 'components/Icon';
import { EditProfileSchema } from 'schemas/editProfileSchema';

export const EditProfile = ({closeModal}) => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Edit profile</Title>
      <UpdateAvatar />

      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          password: '',
          
        }}
        validationSchema={EditProfileSchema}
        onSubmit={(values, actions) => {
          dispatch(update(values));
        }}
      >
        <StyledForm>
           
          <Label>
            <StyledField id="name" name="name" />
            <ErrMsg name="name" component="p" />
          </Label>

          <Label>
            <StyledField id="email" name="email" type="email" />
            <ErrMsg name="email" component="p" />
          </Label>

          <StyledLabel>
            <Icon name="eye" stroke="var(--primaryTextColor)" />
            <LastField
              id="password"
              name="password"
              placeholder="Enter or update your password"
            />
            <ErrMsg name="password" component="p" />
          </StyledLabel>

          <Button type="submit" onClick={closeModal} >Submit</Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};
