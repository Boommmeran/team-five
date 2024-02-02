import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
// import { Sidebar } from './SideBar';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

