import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';
import { Spinner } from 'components/Spinner';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
