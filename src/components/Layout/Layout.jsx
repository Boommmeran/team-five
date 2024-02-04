import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
