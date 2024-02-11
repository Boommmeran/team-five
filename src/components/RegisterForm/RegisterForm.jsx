import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperation';

import { useState } from 'react';
import { Icon } from 'components/Icon';
import {
  ButtonRegister,
  ErrorRegistrationMessage,
  FormRegisterStyled,
  IconStyledEye,
  LabelStyled,
  RegInputStyled,
  RegisterStyledSection,
  StyledNavLinkRegister,
  WrapForRegNav,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = data => {
    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };

  return (
    <RegisterStyledSection>
      <FormRegisterStyled onSubmit={handleSubmit(onSubmit)}>
        <WrapForRegNav>
          <StyledNavLinkRegister to="/auth/register">
            Registration
          </StyledNavLinkRegister>
          <StyledNavLinkRegister to="/auth/login">Login</StyledNavLinkRegister>
        </WrapForRegNav>
        <LabelStyled>
          {' '}
          <RegInputStyled
            placeholder="Enter your name"
            {...register('name', {
              required: 'Required field',
              minLength: {
                value: 2,
                message: 'Name is too short',
              },
            })}
          />
          {errors?.name && (
            <ErrorRegistrationMessage>
              {errors?.name?.message || 'Error'}
            </ErrorRegistrationMessage>
          )}
        </LabelStyled>
        <LabelStyled>
          {' '}
          <RegInputStyled
            placeholder="Enter your email"
            name="email"
            type="email"
            {...register('email', {
              required: 'Required field',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email must include @ and .',
              },
            })}
          />
          {errors?.email && (
            <ErrorRegistrationMessage>
              {errors?.email?.message || 'Error'}
            </ErrorRegistrationMessage>
          )}
        </LabelStyled>
        <LabelStyled>
          <RegInputStyled
            placeholder="Create a password"
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
            <ErrorRegistrationMessage>
              {errors?.password?.message || 'Error'}
            </ErrorRegistrationMessage>
          )}
        </LabelStyled>
        <LabelStyled>
          {' '}
          <RegInputStyled
            placeholder="Confirm your password"
            type={isActive ? 'text' : 'password'}
            name="confirmPassword"
            {...register('confirm_password', {
              required: true,
              validate: val => {
                if (watch('password') !== val) {
                  return 'Your passwords do no match';
                }
              },
            })}
          />{' '}
          <IconStyledEye
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <Icon
              name="eye"
              stroke={isActive ? 'white' : 'rgba(255, 255, 255, 0.3)'}
            />
          </IconStyledEye>
          {errors?.confirm_password && (
            <ErrorRegistrationMessage>
              {errors?.confirm_password?.message || 'Error'}
            </ErrorRegistrationMessage>
          )}
        </LabelStyled>
        <ButtonRegister type="submit" disabled={!isValid}>
          Register Now
        </ButtonRegister>
      </FormRegisterStyled>
    </RegisterStyledSection>
  );
};
