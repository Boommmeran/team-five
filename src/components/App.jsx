import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshing } from '../redux/auth/authOperation';
import { GlobalStyles } from './GlobalStyles';
import { Layout } from 'components/Layout';
import { Spinner } from 'components/Spinner';
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
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path="/welcome"
              element={
                <RestrictedRoute component={<WelcomePage />} redirect="/" />
              }
            />
            <Route
              path="auth/:id"
              element={
                <RestrictedRoute component={<AuthPage />} redirect="/" />
              }
            />
            <Route path="/" element={<Layout />}>
              <Route
                path="/:boardId"
                element={
                  <PrivateRoute component={<HomePage />} redirect="/welcome" />
                }
              ></Route>

              <Route
                index
                element={
                  <PrivateRoute component={<HomePage />} redirect="/welcome" />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
