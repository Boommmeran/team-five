import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';

export const PrivateRoute = ({ component, redirect }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshing);
  const shoudRedirect = !isLogin && !isRefreshed;

  return <>{shoudRedirect ? <Navigate to={redirect} /> : component}</>;
};
