import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ component, redirect }) => {
  const isLogin = useSelector(state => state.auth.isLoggedIn);
  const isRefreshed = useSelector(state => state.auth.isRefreshing);
  const shoudRedirect = !isLogin && !isRefreshed;

  return <div>{shoudRedirect ? <Navigate to={redirect} /> : component}</div>;
};
