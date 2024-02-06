import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { logInUser } from '../../redux/auth/authOperation';
import { useState } from 'react';
import {
  IconStyledEye,
  LabelStyled,
  LoginInputStyled,
  LoginStyled,
  StyledNavLinkLogin,
  WrapForLoginNav,
} from './LoginForm.styled';
import { Icon } from 'components/Icon';

export default function LoginForm() {
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
    <LoginStyled>
      <WrapForLoginNav>
        <StyledNavLinkLogin to="/auth/register">
          Registration
        </StyledNavLinkLogin>
        <StyledNavLinkLogin to="/auth/login">Login</StyledNavLinkLogin>
      </WrapForLoginNav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <LoginInputStyled
            name="email"
            type="email"
            {...register('email', {
              required: 'Required field',
              pattern: /^\S+@\S+$/i,
            })}
          ></LoginInputStyled>
        </label>
        <div>{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
        <LabelStyled style={{ stroke: 'red' }}>
          <LoginInputStyled
            style={{ position: 'relative' }}
            name="password"
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 8,
                message: 'Password is too short',
              },
            })}
          ></LoginInputStyled>
          <IconStyledEye
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          >
            {' '}
            <Icon name="eye" />
          </IconStyledEye>{' '}
        </LabelStyled>
        <div>
          {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
        </div>
        <input type="submit" disabled={!isValid} />
      </form>
    </LoginStyled>
  );
}
