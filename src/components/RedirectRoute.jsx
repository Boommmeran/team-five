import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const RestrictedRoute = ({ component, redirect }) => {
  const isLogin = useSelector(state => state.auth.isLoggedIn);

  return <div>{isLogin ? <Navigate to={redirect} /> : component}</div>;
};
