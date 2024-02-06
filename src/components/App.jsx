import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshing } from '../redux/auth/authOperation';

import { PrivateRoute } from './PrivateRoute';
import AuthPage from 'pages/AuthPage';
import { RestrictedRoute } from './RedirectRoute';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route
          path="auth/:id"
          element={<RestrictedRoute component={<AuthPage />} redirect="/" />}
        />
        <Route
          index
          element={
            <PrivateRoute component={<HomePage />} redirect="/welcome" />
          }
        />
      </Route>
    </Routes>
  );
};
