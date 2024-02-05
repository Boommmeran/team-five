import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshing } from '../redux/auth/authOperation';
import { PrivateRoute } from './PrivateRoute';
import AuthPage from 'pages/AuthPage';
import { RestrictedRoute } from './RedirectRoute';
import { GlobalStyles } from './GlobalStyles';
import themes from '../styles/themeSchemes.json';
import { useAuth } from 'hooks';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, theme = 'light' } = useAuth();

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <>
      <GlobalStyles theme={themes[theme]} />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
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
      </Suspense>
    </>
  );
};
