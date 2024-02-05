import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from 'components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshing } from '../redux/authOperation';

import { PrivateRoute } from './PrivateRoute';
import AuthPage from 'pages/AuthPage';
import { RestrictedRoute } from './RedirectRoute';
import { Sidebar } from './SideBar';

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
      <Route path="/" element={<Sidebar />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="auth/:id"
          element={
            <RestrictedRoute component={<AuthPage />} redirect="/home" />
          }
        />
        <Route
          path="/home"
          element={<PrivateRoute component={<HomePage />} redirect="/" />}
        />
      </Route>
    </Routes>
  );
};
