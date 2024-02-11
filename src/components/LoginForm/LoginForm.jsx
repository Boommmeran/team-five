import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/auth/authOperation';
import { useState } from 'react';
import { Icon } from 'components/Icon';
import {
  ButtonLogin,
  ErrorLoginMessage,
  FormLoginStyled,
  IconStyledEye,
  LabelStyled,
  LogInputStyled,
  LoginStyledSection,
  StyledNavLinkLogin,
  WrapForLoginNav,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => {
    dispatch(logInUser(data));
    reset();
  };

  return (
    <LoginStyledSection>
      <FormLoginStyled onSubmit={handleSubmit(onSubmit)}>
        <WrapForLoginNav>
          <StyledNavLinkLogin to="/auth/register">
            Registration
          </StyledNavLinkLogin>
          <StyledNavLinkLogin to="/auth/login">Login</StyledNavLinkLogin>
        </WrapForLoginNav>
        <LabelStyled>
          {' '}
          <LogInputStyled
            placeholder="Enter your email"
            name="email"
            type="email"
            {...register('email', {
              required: 'Required field',
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors?.email && (
            <ErrorLoginMessage style={{ color: 'red' }}>
              {errors?.email?.message || 'Error'}
            </ErrorLoginMessage>
          )}
        </LabelStyled>
        <LabelStyled>
          <LogInputStyled
            placeholder="Confirm a password"
            name="password"
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 8,
                message: 'Password must include minimum 8 characters',
              },
            })}
          />
          <IconStyledEye
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          >
            <Icon
              name="eye"
              stroke={passwordShown ? 'white' : 'rgba(255, 255, 255, 0.3)'}
            />
          </IconStyledEye>
          {errors?.password && (
            <ErrorLoginMessage style={{ color: 'red' }}>
              {errors?.password?.message || 'Error'}
            </ErrorLoginMessage>
          )}
        </LabelStyled>
        <ButtonLogin type="submit" disabled={!isValid}>
          Login Now
        </ButtonLogin>
      </FormLoginStyled>
    </LoginStyledSection>
  );
};
