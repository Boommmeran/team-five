import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { logInUser } from '../../redux/auth/authOperation';
import { useState } from 'react';
import { Icon } from 'components/Icon';
import {
  ButtonLogin,
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
        <LogInputStyled
          placeholder="Enter your email"
          name="email"
          type="email"
          {...register('email', {
            required: 'Required field',
            pattern: /^\S+@\S+$/i,
          })}
        ></LogInputStyled>
        <div>
          {errors?.email && (
            <p style={{ background: 'red', color: 'white' }}>
              {errors?.email?.message || 'Error'}
            </p>
          )}
        </div>
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
          ></LogInputStyled>
          <IconStyledEye
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          >
            <Icon name="eye" />
          </IconStyledEye>
        </LabelStyled>
        <div>
          {errors?.password && (
            <p style={{ background: 'red', color: 'white' }}>
              {errors?.password?.message || 'Error'}
            </p>
          )}
        </div>

        <ButtonLogin type="submit" disabled={!isValid}>
          Login Now
        </ButtonLogin>
      </FormLoginStyled>
    </LoginStyledSection>
  );
};
