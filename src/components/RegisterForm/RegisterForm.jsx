import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperation';

import { useState } from 'react';
import { Icon } from 'components/Icon';
import {
  ButtonRegister,
  FormRegisterStyled,
  IconStyledEye,
  LabelStyled,
  // IconStyledEye,
  RegInputStyled,
  RegisterStyledSection,
  StyledNavLinkRegister,
  WrapForRegNav,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

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
        <RegInputStyled
          placeholder="Enter your name"
          {...register('name', {
            required: 'Required field',
            minLength: {
              value: 2,
              message: 'Name is too short',
            },
          })}
        ></RegInputStyled>
        <div>
          {errors?.name && (
            <p style={{ color: 'red' }}>{errors?.name?.message || 'Error'}</p>
          )}
        </div>
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
        ></RegInputStyled>
        <div>
          {errors?.email && (
            <p style={{ color: 'red' }}>{errors?.email?.message || 'Error'}</p>
          )}
        </div>
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
          ></RegInputStyled>
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
        </LabelStyled>
        <div>
          {errors?.password && (
            <p style={{ color: 'red' }}>
              {errors?.password?.message || 'Error'}
            </p>
          )}
        </div>
        <RegInputStyled
          placeholder="Confirm your password"
          name="confirmPassword"
          type="password"
          {...register('confirm_password', {
            required: true,
            validate: val => {
              if (watch('password') !== val) {
                return 'Your passwords do no match';
              }
            },
          })}
        />
        <div>
          {errors?.confirm_password && (
            <p style={{ color: 'red' }}>
              {errors?.confirm_password?.message || 'Error'}
            </p>
          )}
        </div>
        <ButtonRegister type="submit" disabled={!isValid}>
          Register Now
        </ButtonRegister>
      </FormRegisterStyled>
    </RegisterStyledSection>
  );
};
