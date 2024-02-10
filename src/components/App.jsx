import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { Layout } from 'components/Layout';
import { Spinner } from 'components/Spinner';
import { useDispatch } from 'react-redux';
import { refreshing } from '../redux/auth/authOperation';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RedirectRoute';

import themes from '../styles/themeSchemes.json';
import { useAuth } from 'hooks';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, theme = 'light' } = useAuth();

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles theme={themes[theme]} />
      {isRefreshing ? (
        <Spinner />
      ) : (
        <>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/welcome" element={<WelcomePage />} />
                <Route
                  path="auth/:id"
                  element={
                    <RestrictedRoute component={<AuthPage />} redirect="/" />
                  }
                />
                <Route index element={<HomePage />} />
              </Route>
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
