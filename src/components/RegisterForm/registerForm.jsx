import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUser } from '../../redux/authOperation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export default function RegisterForm() {
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => {
    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <div>
      <div>
        <NavLink to="/auth/register">Registration</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input
            {...register('name', {
              required: 'Required field',
              minLength: {
                value: 2,
                message: 'Name is too short',
              },
            })}
          ></input>
        </label>
        <div>{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}</div>
        <label>
          Email
          <input
            name="email"
            type="email"
            {...register('email', {
              required: 'Required field',
              pattern: /^\S+@\S+$/i,
            })}
          ></input>
        </label>
        <div>{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
        <label>
          Password
          <input
            name="password"
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 7,
                message: 'Password is too short',
              },
            })}
          ></input>
          <i
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          >
            {passwordShown ? eye : eyeSlash}
          </i>
        </label>
        <div>
          {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
        </div>
        <input
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
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
