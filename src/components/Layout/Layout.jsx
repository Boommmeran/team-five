import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Container } from './Layout.styled';
import { UserInfo } from 'components/UserInfo';

export const Layout = () => {
  return (
    <Container>
      <main>
        <UserInfo/>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
