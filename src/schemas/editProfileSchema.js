import * as Yup from 'yup';

export const EditProfileSchema = Yup.object().shape({
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