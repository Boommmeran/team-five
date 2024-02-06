import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';
import { Header } from 'components/Header';

export const Layout = () => {
  return (
    <Container>
      <Header/>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
