import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';
import { Spinner } from 'components/Spinner';

export const Layout = () => {
  return (
    <Container>
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
