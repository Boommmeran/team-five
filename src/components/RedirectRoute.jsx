import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

export const RestrictedRoute = ({ component, redirect }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  return <div>{isLogin ? <Navigate to={redirect} /> : component}</div>;
};
