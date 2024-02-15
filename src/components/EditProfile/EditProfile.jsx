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
  IconStyledEye,
} from './EditProfile.styled';
import { Formik } from 'formik';

import { useAuth } from 'hooks';
import { update } from '../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { UpdateAvatar } from 'components/UpdateAvatar';
import { Icon } from 'components/Icon';
import {
  EditProfileSchema,
  EditProfileSchemaWithoutPass,
} from 'schemas/editProfileSchema';
import { useState } from 'react';

export const EditProfile = ({ closeModal }) => {
  const [schema, setSchema] = useState(EditProfileSchemaWithoutPass);
  const [passwordShown, setPasswordShown] = useState(false);
  
  const { user } = useAuth();
  const dispatch = useDispatch();
  console.log(passwordShown);

  const initialValues = {
          name: user.name,
          email: user.email,
          password: '',
  }
  
  const setCurrentSchema = (evt) => {
    if (evt.target.value !== '') {
      setSchema(EditProfileSchema);
    }

    setSchema(EditProfileSchemaWithoutPass);
  }


  return (
    <Container>
      <Title>Edit profile</Title>
      <UpdateAvatar />

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => {
          dispatch(update(values));
          closeModal();
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Label>
              <StyledField id="name" name="name" />
              <ErrMsg name="name" component="p" />
            </Label>

            <Label>
              <StyledField id="email" name="email" type="email" />
              <ErrMsg name="email" component="p" />
            </Label>

            <StyledLabel>
              <IconStyledEye
                onClick={() => {
                  setPasswordShown(!passwordShown);
                }}
              >
                <Icon
                  width="18"
                  height="18"
                  name="eye"
                  stroke={
                    passwordShown
                      ? 'var(--secondaryTextColor)'
                      : 'var(--accent)'
                  }
                />
              </IconStyledEye>

              <LastField
                onChange={evt => {
                  setFieldValue('password', evt.target.value);
                  setCurrentSchema(evt);
                }}
                id="password"
                name="password"
                type={passwordShown ? 'text' : 'password'}
                placeholder="Enter or update your password"
              />
              <ErrMsg name="password" component="p" />
            </StyledLabel>

            <Button type="submit">Submit</Button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};
